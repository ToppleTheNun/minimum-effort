// gatsby-config.js
const { generateConfig } = require("gatsby-plugin-ts-config");
module.exports = generateConfig({
  configDir: "src/gatsby-config",
  tsNode: true,
});
