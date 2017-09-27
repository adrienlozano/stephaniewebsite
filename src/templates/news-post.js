import React from 'react';
import PageSection from '~/components/page-section';
import Typography from '~/components/typography';
import Heading from '~/components/heading';
import { Box } from 'rebass';
import Link from "~/components/link";
import styled, { color, space, width, fontSize } from 'styled-components';
import Icon from "~/components/icon";
import { darken } from 'polished';
import { NewsArticleNavigation } from '~/components/news';


const NewsRoute = ({data, pathContext}) =>{
    let { html, frontmatter } = data ? data.current : { frontmatter : {}};
    let image = frontmatter.image ? (<img style={{maxWidth:"100%", objectFit: "cover"}} src={frontmatter.image}></img>) : null;
    let { prev, next } = pathContext;

    return (
    <div>
        <PageSection bg="light">
            <Heading>{frontmatter.title}</Heading>
            {image}
            <Box dangerouslySetInnerHTML={{ __html: html }}></Box>

        </PageSection>
        <NewsArticleNavigation prev={prev} next={next} />
    </div>
    )
}
export default NewsRoute;

export const pageQuery = graphql`
query PageBySlugWithRecentNews($slug: String!, $area: String!){
    current :markdownRemark(
        fields: {
            slug: { eq: $slug }
        }
    ){
        html
        frontmatter{
            title,
            image
        }
    }
    recent: allMarkdownRemark(
        filter:{
            fields: {
                area: { eq: $area },
                slug: { ne : $slug }
            }
        }
        sort: { fields: [frontmatter___date],  order: DESC }
        limit: 3
    ){
        edges{
            node{
                id
                fields{
                    area,
                    slug
                }
                frontmatter{
                    title
                }
            }
        }
    }
}
`