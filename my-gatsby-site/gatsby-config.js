/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "TkUhCoJFwH6Grfat2uAOCpp7WlDF8UU893aveTBsy2E",
      "spaceId": "x2zkopkt8oiy"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp"]
};
