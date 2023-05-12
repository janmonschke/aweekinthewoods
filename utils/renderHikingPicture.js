const path = require("path");
const Image = require("@11ty/eleventy-img");
const imageOptions = require("./imageOptions");
const { CONTENT_DIR } = require("./constants");

const imageAttributes = {
  ...imageOptions.defaultAttributes,
  sizes: "(max-width: 1000px), 100vw",
  class: "hikingPicture",
};

const baseUrlPath = "/img/hikes";
const baseOutputDir = path.join("_site", "img", "hikes");

const baseImageOptions = {
  ...imageOptions,
  urlPath: "/img/hikes",
  outputDir: path.join("_site", "img", "hikes"),
  widths: [500, 1000, 1500, 2000],
};

module.exports = function renderHikingPicture({
  src,
  attributes,
  includeCaption,
  linkToImage,
}) {
  // make sure that images have nice urls e.g. /img/hikes/france/HIKENAME/image
  const pathArray = src.split(path.sep);
  const contentIndex = pathArray.indexOf(CONTENT_DIR);
  const imagesIndex = pathArray.indexOf("images");
  const relativeFolder = pathArray.slice(contentIndex + 1, imagesIndex);
  const urlPath = [baseUrlPath, ...relativeFolder].join("/");
  const outputDir = path.join(baseOutputDir, ...relativeFolder);

  const actualImageOptions = {
    ...baseImageOptions,
    urlPath,
    outputDir,
  };

  Image(src, actualImageOptions);

  const metadata = Image.statsSync(src, actualImageOptions);
  const mergedAttributes = { ...imageAttributes, ...attributes };
  const imageMarkup = Image.generateHTML(metadata, mergedAttributes, {
    whitespaceMode: "inline",
  });

  // Calculate correct padding to span to the correct ratio
  const biggestJpeg = metadata.jpeg[metadata.jpeg.length - 1];
  const heightToWidth = biggestJpeg.height / biggestJpeg.width;
  const paddingBottom = heightToWidth * 100;

  let wrappedImageMarkup = `
    <span class="hikingPicture__wrapper">
      <span class="hikingPicture__bgSpanner" style="padding-bottom: ${paddingBottom}%;"></span>
      ${imageMarkup}
    </span>
  `;

  if (linkToImage) {
    const imageLinkHref = metadata.jpeg[metadata.jpeg.length - 1].url;
    wrappedImageMarkup = `
      <a href="${imageLinkHref}" target="_blank">
        ${wrappedImageMarkup}
      </a>
    `;
  }

  if (includeCaption) {
    return `
      <figure>
        ${wrappedImageMarkup}
        <figcaption class="hikingPicture__caption">${mergedAttributes.alt}</figcaption>
      </figure>`;
  } else {
    return wrappedImageMarkup;
  }
};
