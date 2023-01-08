module.exports = {
  siteMetadata: {
    title: "Samsung smartphone showcase",
    description:
      "Samsung smartphone showcase was founded in 1977 by founder, John Doe. AA continues to be at the forefront of Samsung smartphones by establishing the careers of our talents on a holistic level -- and setting trends within the industry.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: " http://agency-clone.local/graphql",
      },
    },
  ],
}
