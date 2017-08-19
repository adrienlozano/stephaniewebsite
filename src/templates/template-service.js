import React from 'react';
import PageSection from '~/components/page-section';
import Typography from '~/components/typography';
import Heading from '~/components/heading';
import { Box } from 'rebass';

const ServiceRoute = ({data}) =>{
    let { html, frontmatter } = data ? data.markdownRemark : { frontmatter : {}};
    let image = frontmatter.image ? (<img src={frontmatter.image}></img>) : null;
    return (
        <PageSection bg="light">
            <Heading>{frontmatter.title}</Heading>
            {image}
            <Box dangerouslySetInnerHTML={{ __html: html }}></Box>
    </PageSection>)
}
export default ServiceRoute;

export const pageQuery = graphql`
    query PageByCategory($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter{
                title,
                image
            }
        }
    }
`