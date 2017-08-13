import React from 'react';
import PageSection from "~/components/page-section";
import Typography from '~/components/typography';

export default ({data}) =>{ 
    const news = data ? data.news.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug, excerpt: x.node.excerpt })) : [];

    return (
        <PageSection bg="light">
            <Typography component="h1">News</Typography>
        </PageSection>
    )
}

export const pageQuery = graphql`
     query NewsQuery {
        news: allMarkdownRemark(
        limit: 1000
        filter:{ fields: { area: { eq: "news"} }}
        sort: { fields: [frontmatter___date],  order: DESC }
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