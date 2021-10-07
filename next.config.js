module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  }
};
const withImages = require("next-images");
module.exports = withImages();
