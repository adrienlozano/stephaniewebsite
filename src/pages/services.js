import React from 'react';
import { ServicesSection } from '~/components/services';
import Typography from '~/components/typography';

export default ({className, data}) => {
    const services = data.services.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id }));
    return (<ServicesSection services={services}>
    </ServicesSection>
)
};


export const pageQuery = graphql`
    query ServicesQuery {
        services: allMarkdownRemark(
        limit: 2000
        filter:{ fields: { area: { eq: "services"} }}
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
          tags
          }
       }
      }
    }
  }
`