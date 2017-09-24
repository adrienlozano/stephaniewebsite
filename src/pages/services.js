import React from 'react';
import { ServicesSection } from '~/components/services';

export default ({className, data}) => {
    const services = data ? data.services.edges.map(x => ({...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug })) : [];
    return (<ServicesSection services={services}>
    </ServicesSection>
)
};


export const pageQuery = graphql`
    query ServicesQuery {
        services: allMarkdownRemark(
        limit: 2000
        filter:{ fields: { area: { eq: "services"} }}
        sort: { fields: [frontmatter___order], order: ASC }
    ){
      edges {
        node{
          fields{
            area,
            slug
          },
        id,
        frontmatter{
          title,
          caption,
          extract,
          image,
          thumb,
          tags,
          thumbPosition
          }
       }
      }
    }
  }
`