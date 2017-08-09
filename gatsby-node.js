require('babel-register');

const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");
const kebabCase = require("./src/utils/kebab-case");

/*
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/template-blog-post.js')
    const tagPagesTemplate = path.resolve('src/templates/template-tag-page.js')
    graphql(
      `
      {
        allMarkdownRemark(limit: 1000, filter: { frontmatter: { draft: { ne: true }}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      // Create blog posts pages.
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.fields.slug,
            highlight: edge.node.frontmatter.highlight,
            shadow: edge.node.frontmatter.shadow,
          },
        })
      })

      // Create tag pages.
      let tags = []
      result.data.allMarkdownRemark.edges.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagPagesTemplate,
          context: {
            tag,
          },
        })
      })

      resolve()
    })
  })
}
*/

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath);
    const pagePath = path.resolve(node.absolutePath).replace(path.resolve('./src/pages/'), "");
    var area = path.parse(pagePath).dir.split(path.sep)[1];
    if(area === "")
        area = "default";

    createNodeField({ node, name: `area`, value: area });

  } else if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.area === `undefined`
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `area`,
      value: fileNode.fields.area,
    })
  }
}
