require('dotenv').config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Qim Lönnegren frontend resume`,
    description: `Student frontend developter resume`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "spaceId": process.env.CONTENTFUL_SPACE_ID_STRING,
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN_STRING
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp"]
};
