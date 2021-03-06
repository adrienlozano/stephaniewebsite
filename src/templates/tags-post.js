import React from "react"
import Link from "~/components/link";
import PageSection from "~/components/page-section";
import Typography from "~/components/typography";
import Heading from "~/components/heading";
import { BadgeLink } from "~/components/link";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { area } = this.props.pathContext;

    const postLinks = posts.map(post =>
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    )

    return (
      <PageSection bg="light">
        <Heading>
          {this.props.data.allMarkdownRemark.totalCount}
          {` `}posts tagged with “{this.props.pathContext.tag}”
        </Heading>
        <ul>
          {postLinks}
        </ul>

        <BadgeLink to={`${area}/tags/`}>Browse all tags</BadgeLink>
      </PageSection>
    )
  }
}

export default TagRoute

export const pageQuery = graphql`
query TagPage($tag: String, $area: String) {
  allMarkdownRemark(
    limit: 1000
    sort: { fields: [frontmatter___date], order: DESC },
    filter: { 
      frontmatter: {
        tags: { 
          in: [$tag]
        }
      }
      fields: { 
        area: { eq: $area }
      }
    }
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
}
`