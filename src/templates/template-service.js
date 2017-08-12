import React from 'react';
import PageSection from '~/components/page-section';

const ServiceRoute = ({data}) =>{
    let { html, frontmatter } = data ? data.markdownRemark : { frontmatter : {}};
    return (
        <PageSection bg="light">
            <h1>{frontmatter.title}</h1>
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