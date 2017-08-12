var path = require("path");

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve('./src/pages/'),
        name: "pages",
      }
    },
    {
      resolve: "gatsby-transformer-remark"
      
    },
    "gatsby-plugin-react-helmet",
    { 
      resolve: "resolve-alias-plugin",
      options: {
        alias : {
           "~" : path.resolve('./src')
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp"
  ]
}
