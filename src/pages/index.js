import React from 'react'
import CalloutSection from '~/components/callout';
import MainCarousel from '~/components/main-carousel';
import { ServicesSection } from '~/components/services';
import { NewsSection } from '~/components/news';

export default ({data}) => {
   const services = data.services.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id }));
   const news = data.news.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id }));

return (
    <div>
      <MainCarousel/>
      <ServicesSection services={services}/>
      <CalloutSection/>
      <NewsSection news={news} />
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
          tags
        }
      }
    }
  
query IndexQuery {
    services:allMarkdownRemark(
        limit: 100
        filter:{ fields: { area: { eq: "services" } }}
    ) {
      edges {
       ...Content
      }
  },
    news:allMarkdownRemark(
        limit: 100
        filter:{ fields: { area: { eq: "news" } }}
    ) {
      edges {
      	...Content
      }
  },
}`;
