import React from 'react';
import PageSection from "~/components/page-section";
import Typography from '~/components/typography';
import LinkButton from '~/components/link-button';
import { Box } from 'rebass';
import format from 'date-fns/format';

export default ({data}) =>{ 
    const news = data ? data.news.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug, excerpt: x.node.excerpt })) : [];
    
    var articles = news.map( ({title, excerpt, slug, date}) => (
        <Box mb={5} >
            <Typography component="h4" pb={0} mb={0}>{title}</Typography>
            <Typography f={1} pt={0} mt={1} color="secondaryAccent">{ format(date, "DD MMM, YYYY")}</Typography>
            <Typography>{excerpt}</Typography>
            <LinkButton href={slug}>Read More</LinkButton>
        </Box>
    ));

    return (
        <PageSection bg="light">
            <Typography component="h1">News</Typography>
            {articles}
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
            excerpt(pruneLength: 350)
            frontmatter{
                title,
                caption,
                extract,
                image,
                thumb,
                tags,
                date
            }
        }
      }
    }
  }
`