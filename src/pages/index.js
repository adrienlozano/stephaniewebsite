import React from 'react'
import CalloutSection from '~/components/callout';
import MainCarousel from '~/components/main-carousel';
import { ServicesSection } from '~/components/services';
import { NewsSection } from '~/components/news';
import  Icon  from "~/components/icon";
import { Box, Flex } from 'rebass';
import Heading from '~/components/heading';
import PageSection from "~/components/page-section";
import { Circle } from 'rebass';
import { darken, lighten } from 'polished';
import styled, { withTheme }  from 'styled-components';

const VisaLink = styled.a`
display:block;
  text-decoration:none;
  &:hover { 
    ${ Box }{
      background-color: ${ ({theme}) => theme.colors.primaryAccent };
      transition: all 0.3s ease-in-out;
      border-color: ${({ theme }) => darken(0.1, theme.colors.primaryAccent )};
    }
    ${ Icon }{
      color: ${({ theme }) => darken(0.35, theme.colors.primaryAccent )};
    }

    ${ Heading }{
      color: ${ ({theme}) => theme.colors.primaryAccent };
    }
  
  };

  width:100%;
  height:100%;
`

const StyledBox = styled(Box)`
  line-height: 1em;
  width: 1em;
  height: 1em;
  font-size:6em;
  border-radius: 10px;
  border:solid 2px ${ ({theme}) => darken(0.05, theme.colors.light ) };
  display: inline-flex;
  border-radius: 50%;
`

const StyledIcon = styled(Icon)`
  display:block;
  width:100%;
  height:100%;
  font-size: 0.5em;
  margin-top:-5px;
  color: ${({theme}) => theme.colors.dark };
`

const Visa = withTheme(({title, slug, icon, theme}) => {
  return (
  <Box w={[1, 1/2, 1/3, 1/4]} mb={[5, 6]} style={{ textAlign: "center"}}>
    <VisaLink href={slug}>
      <StyledBox bg="light" ><StyledIcon color="dark"  icon={icon}></StyledIcon></StyledBox>
      <Heading f={[1, 2, 3, 4, 5]}>{title}</Heading>
    </VisaLink>
  </Box>
)
});

const VisaSection = withTheme(({visas, theme}) =>{
  const children = visas.map(visa => (<Visa key={visa.id} {...visa}/>));
  return (<Flex bg="white" style={{ borderTop: "solid 1px " + darken(0.1, theme.colors.light ) }} wrap pt={6}>
    {children}
  </Flex>)
});

export default ({data}) => {
   const services = data.services.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug }));
   const news = data.news.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug, excerpt: x.node.excerpt }));
   const visas = data.visas.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug }));
    
return (
    <div>
      <MainCarousel/>
      <ServicesSection services={services}/>
      <VisaSection visas={visas} />
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
          order,
          icon
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
  visas:allMarkdownRemark(
    limit: 100
    filter:{ fields: { area: { eq: "visas" } }}
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
