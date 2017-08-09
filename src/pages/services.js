import React from 'react';

export default (props) => {
    const edges = props.data.allMarkdownRemark.edges
    const services = edges.map( x => x.node.frontmatter );
    const children = services.map(x => (<li>{x.caption}</li>)); 
    return (<div><h1>Services</h1>{children}</div>)
};


export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
        limit: 2000
        filter:{ fields: { area: { eq: "services"} }}
    ) {
      edges {
        node {
          frontmatter {
           title,
           caption,
            extract,
            image,
            thumb
          }
        }
      }
    }
  }
`