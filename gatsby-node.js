require('babel-register');

const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");
const kebabCase = require("./src/utils/kebab-case");


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const servicePagesTemplate = path.resolve('src/templates/template-service.js')
  //  const tagPagesTemplate = path.resolve('src/templates/template-tag-page.js')
    graphql(
      `
      {
        allMarkdownRemark(limit: 2000) {
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
          component: slash(servicePagesTemplate),
          context: {
            area: edge.node.fields.area,
            slug: edge.node.fields.slug
          },
        })
      })

      /*
      // Create tag pages.
      let tags = []
      result.data.allMarkdownRemark.edges.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)
      tags.forEach(tag => {
        const tagPath = `/tags/${kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagPagesTemplate,
          context: {
            tag,
          },
        })
      })*/

      resolve()
    })
  })
}


// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath);
    const pagePath = path.resolve(node.absolutePath).replace(path.resolve('./src/pages/'), "");
    var area = path.parse(pagePath).dir.split(path.sep)[1];
    if(!area)
        area = null;

    let slug = parsedFilePath.dir.indexOf('---') > 0 ? `/${parsedFilePath.dir.split('---')[1]}/` : `/${parsedFilePath.name}/`;
    slug = area !== null ? `/${area}${slug}` : slug;  

    createNodeField({ node, name: `slug`, value: slug });   
    createNodeField({ node, name: `area`, value: area });

  } else if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `area`,
      value: fileNode.fields.area,
    });

    createNodeField({
      node,
      name: 'slug',
      value: fileNode.fields.slug
    })
  }
}
