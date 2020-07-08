import { resolve } from "path";

export const siteMetadata = {
  title: `Minimum Effort`,
  description: `Semi-Hardcore Raiding Guild on Thrall`,
  author: `@ToppleTheNun`,
};
export const plugins = [
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${resolve(__dirname, "..")}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Minimum Effort - Thrall`,
      short_name: `Minimum Effort`,
      start_url: `/`,
      background_color: `#646e78ff`,
      theme_color: `#8c1616ff`,
      display: `minimal-ui`,
      icon: `src/images/horde-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
