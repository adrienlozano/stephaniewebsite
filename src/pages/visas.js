import React from 'react';
import { VisaSection } from '~/components/visas';
import Typography from '~/components/typography';

export default ({className, data}) => {
    const visas = data ? data.visas.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug })) : [];
    return (<VisaSection visas={visas}>
        </VisaSection>
    )
};


export const pageQuery = graphql`
    query VisasQuery {
        visas: allMarkdownRemark(
        limit: 100
        filter:{ fields: { area: { eq: "visas"} }}
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