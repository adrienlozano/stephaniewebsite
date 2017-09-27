import React from "react"
import Link from "~/components/link";
import kebabCase from "~/utils/kebab-case"
import Heading from "~/components/heading";
import PageSection from "~/components/page-section";

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group
    const { area } = this.props.pathContext;

    return (
      <PageSection bg="light">
        <Heading>Tags</Heading>
        <ul>
          {allTags.map(tag =>
            <li key={tag.fieldValue}>
              <Link to={`${area}/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          )}
        </ul>
      </PageSection>
    )
  }
}

export default TagsPageRoute

export const pageQuery = graphql`
  query TagsQuery($area: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { 
        fields: { 
          area: { eq: $area }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`