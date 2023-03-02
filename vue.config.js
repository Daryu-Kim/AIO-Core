const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "AIO-Core",
  },
  filenameHashing: true,
  configureWebpack: (config) => {
    config.output.filename = "js/[name].[hash].js";
    config.output.chunkFilename = "js/[name].[hash].js";
  },
});
