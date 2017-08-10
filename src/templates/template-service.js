import React from 'react';

const ServiceRoute = (props) =>{
    let { html, frontmatter } = props.data.markdownRemark;
    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>)
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