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
      "accessToken": CONTENTFUL_ACCESS_TOKEN_STRING,
      "spaceId": CONTENTFUL_SPACE_ID_STRING
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp"]
};
