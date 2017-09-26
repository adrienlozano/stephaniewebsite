require('babel-register');

const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");
const kebabCase = require("./src/utils/kebab-case");
const { mergeDeepRight } = require('ramda');

/*
  Resolve a template given a specific node edge and a given template hash. Use the default template
  as specified by the hash unless a predefined hash is specified based on the given area.
*/
const resolveTemplate = (name, templates, area) => {
  var template = null;

  if(area && area in templates){
    template = templates[area];
  }

  if(template && typeof(template) === "object"){
    template = template[name];
  }

  if(template === null){
    template = templates.default;
  }

  return template;
}


/*
 Define base page config and merge additional config as specified.
*/
const getBasePageConfig = (edge, component, config = {}) => {
 return mergeDeepRight({
   path: edge.node.fields.slug,
   component: slash(component),
   context: {
     area: edge.node.fields.area,
     slug: edge.node.fields.slug
   }
 }, config);
}

/*
 Default page creation with base config i.e. services/visas
*/
const createDefaultPages = (createPage, templates, edges) => {
 edges.forEach(edge => {
   var template = resolveTemplate("default", templates, edge.node.fields.area);
   var config = getBasePageConfig(edge, template);
   createPage(config);
 });
}

/*
 Page creation for news including next and prev included as part of the context
*/
const createNewsPages = (createPage, templates, articles) => {

  articles.forEach( (edge, index) => {
   var template = resolveTemplate("post", templates, edge.node.fields.area);
   const prev = index === 0 ? false : articles[index - 1].node;
   const next = index === articles.length - 1 ? false : articles[index + 1].node;
   var config = getBasePageConfig(edge, template, { context: { prev, next }  });
   createPage(config);
 });

 const PAGE_SIZE = 10;
 const total = Math.ceil(articles.length / PAGE_SIZE);
 for(let i =1; i <= total; i++){
   var edge = articles[i - 1];

   var slug = i === 1 ? `/${edge.node.fields.area}` : `/${edge.node.fields.area}/page/${i}`;
   createPage({
     path: slug,
     component: resolveTemplate("default", templates, edge.node.fields.area),
     context: {
       current: i,
       skip: (i - 1) * PAGE_SIZE,
       total,
       area: edge.node.fields.area,
       pageSize: PAGE_SIZE
     }
   })
 }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {

    const templates =  {
      default: path.resolve('src/templates/default.js'),
      news: {
        default: path.resolve('src/templates/news-index.js'),
        post: path.resolve('src/templates/news-post.js')
      },
    }

    graphql(
      `
      fragment context on MarkdownRemark{
        fields{
          slug
          area
        }
      }

      {
        news: allMarkdownRemark(
          filter:{ fields: { area: { eq: "news"} }}
          sort: { fields: [frontmatter___date],  order: DESC }
        ) {
          edges {
            node {
              ...context
              frontmatter {
                tags
                title
              }
            }
          }
        }
        pages: allMarkdownRemark(
          filter:{ fields: { area: { ne: "news"}}}
        ){
          edges {
            node {
              ...context
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      const { data } = result;

      //Define pages automatically defined based on markdown using the predefined fields as specified by node creation
      createDefaultPages(createPage, templates, data.pages.edges);
      createNewsPages(createPage,  templates , data.news.edges);
      resolve()
    })
  })
}


// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField, createParentChildLink  } = boundActionCreators;

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
