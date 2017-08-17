import React from 'react'
import CalloutSection from '~/components/callout';
import MainCarousel from '~/components/main-carousel';
import { ServicesSection } from '~/components/services';
import { NewsSection } from '~/components/news';

export default ({data}) => {
   const services = data ? data.services.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug })) : [];
   const news = data ? data.news.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug, excerpt: x.node.excerpt })) : [];

return (
    <div>
      <MainCarousel/>
      <ServicesSection services={services}/>
      <CalloutSection/>
      <NewsSection news={news} py={5} />
    </div>
  )
}

export const pageQuery = graphql`
    fragment Content on MarkdownRemarkEdge{
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
          date,
          order
        }
      }
    }
  
query LandingQuery {
    services:allMarkdownRemark(
        limit: 100
        filter:{ fields: { area: { eq: "services" } }}
        sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
       ...Content
      }
  },
    news:allMarkdownRemark(
        limit: 100
        filter:{ fields: { area: { eq: "news" } }}
        sort: { fields: [frontmatter___date],  order: DESC }
    ) {
      edges {
        ...Content,
        node{
          excerpt(pruneLength: 350)
        }
      }
  },
}`;
