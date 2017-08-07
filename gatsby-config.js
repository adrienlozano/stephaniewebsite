var path = require("path");

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve('./src/pages/news'),
        name: "news",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve('./src/pages/services'),
        name: "services",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve('./src/pages/visas'),
        name: "visas",
      }
    },
    "gatsby-transformer-remark",

    "gatsby-plugin-react-helmet",
    { 
      resolve: "resolve-alias-plugin",
      options: {
        alias : {
           "~" : path.resolve('./src')
        }
      }
    },
    "gatsby-plugin-styled-components"
  ]
}
