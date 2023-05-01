const path = require("path");
const typography = require("./utils/typography");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const Image = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const renderHikingPicture = require("./utils/renderHikingPicture");
const metadata = require("./_data/metadata");
const { CONTENT_DIR } = require("./utils/constants");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("content/**/*.kml");

  eleventyConfig.addGlobalData("typographyStyles", typography.toString());

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- more -->",
  });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: ["./_components/**/*.webc", "npm:@11ty/eleventy-img/*.webc"],
  });

  const imageOptions = {
    formats: ["avif", "webp", "jpeg"],

    urlPath: "/img",

    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },

    sharpWebpOptions: {
      quality: 80,
    },
    sharpJpegOptions: {
      quality: 90,
    },
    sharpAvifOptions: {
      quality: 80,
    },
  };

  const hikingImageOptions = {
    urlPath: "/img/hikes",
    outputDir: path.join("_site", "img", "hikes"),
    widths: [500, 1000, 1500, 2000],
  };

  const hikingImageAttributes = {
    sizes: "(max-width: 1000px), 100vw",
    class: "hikingPicture",
  };

  eleventyConfig.addPlugin(Image.eleventyImagePlugin, imageOptions);

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItEleventyImg, {
      imgOptions: {
        ...imageOptions,
        ...hikingImageOptions,
      },
      globalAttributes: {
        ...imageOptions.defaultAttributes,
        ...hikingImageAttributes,
      },
      resolvePath: (filepath, env) => {
        return path.join(path.dirname(env.page.inputPath), filepath);
      },
      renderImage: (_, [src, attributes]) => {
        return renderHikingPicture({
          src,
          attributes,
          includeCaption: true,
          linkToImage: true,
        });
      },
    })
  );

  eleventyConfig.addCollection("blogPosts", async function (collectionApi) {
    // Collections are sorted in ascending order in eleventy,
    // so we reversethat order for blog posts.
    const blogPosts = [...collectionApi.getFilteredByTag("post")].reverse();
    return await Promise.all(
      blogPosts.map(async (blogPost, index, posts) => {
        const isFirstPost = index === 0;
        const isLastPost = index === posts.length - 1;
        const prevPostObj = isLastPost ? undefined : posts[index + 1];
        const nextPostObj = isFirstPost ? undefined : posts[index - 1];

        blogPost.data.prevPost = prevPostObj && {
          title: prevPostObj.data.title,
          url: prevPostObj.url,
        };

        blogPost.data.nextPost = nextPostObj && {
          title: nextPostObj.data.title,
          url: nextPostObj.url,
        };

        const coverImagePath = blogPost.data.cover
          ? blogPost.inputPath.replace("index.md", "cover.jpg")
          : undefined;

        blogPost.data.coverImageHtml = renderHikingPicture({
          src: coverImagePath,
          attributes: {
            alt: blogPost.data.title,
          },
          includeCaption: false,
          linkToImage: false,
        });

        let shareMetadata = await Image(coverImagePath, {
          widths: [600],
          formats: ["jpeg"],
        });
        blogPost.data.shareImageUrl = metadata.url + shareMetadata.jpeg[0].url;

        return blogPost;
      })
    );
  });

  return {
    dir: {
      input: CONTENT_DIR,
      includes: "../_includes",
      data: "../_data",
    },
  };
};
