import React from 'react';
import PageSection from '~/components/page-section';
import Typography from '~/components/typography';

const ServiceRoute = ({data}) =>{
    let { html, frontmatter } = data ? data.markdownRemark : { frontmatter : {}};
    return (
        <PageSection bg="light">
            <Typography component="h1">{frontmatter.title}</Typography>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </PageSection>)
}
export default ServiceRoute;

export const pageQuery = graphql`
    query PageByCategory($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter{
                title
            }
        }
    }
`