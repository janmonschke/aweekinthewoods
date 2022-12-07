const cheerio = require("cheerio");
const url = process.env.URL || "https://aweekinthewoods.com";

module.exports = {
  siteMetadata: {
    title: `A week in the woods`,
    site_name: "A week in the woods - Hiking Blog",
    author: `Jan Monschke`,
    description: `A long-distance hiking blog`,
    siteUrl: `https://aweekinthewoods.com`,
    social: {
      twitter: `janmonschke`,
    },
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
              withWebp: { quality: 80 },
              showCaptions: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
      __key: "blog",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
      __key: "assets",
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A week in the woods`,
        short_name: `A week in the woods`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: replaceBlurryImages(
                    node.frontmatter.title,
                    node.excerpt
                  ),
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [
                    {
                      "content:encoded": replaceBlurryImages(
                        node.frontmatter.title,
                        node.html
                      ),
                    },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { type: { ne: "info" } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "A week in the woods",
          },
        ],
      },
    },
  ],
};

function replaceBlurryImages(title, htmlWithImages) {
  const $ = cheerio.load(htmlWithImages);
  const imageWrappers = $(".gatsby-resp-image-wrapper");
  console.log("replacing images", title, imageWrappers.length);
  imageWrappers.each((_, wrapper) => {
    const actualImage = $(".gatsby-resp-image-image", wrapper);
    actualImage.attr(
      "src",
      actualImage.attr("src").replaceAll("/static", `${url}/static`)
    );
    const srcset = actualImage.attr("srcset");
    if (srcset) {
      actualImage.attr("srcset", srcset.replaceAll("/static", `${url}/static`));
    }
    actualImage.attr("sizes", "");
    actualImage.attr("style", "max-width: 100%");
    $(wrapper).replaceWith(actualImage);
  });

  return $.html();
}
