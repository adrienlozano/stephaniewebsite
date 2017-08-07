var path = require("path");

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
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
