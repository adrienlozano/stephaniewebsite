import React from "react"
import Link from "gatsby-link"
import kebabCase from "~/utils/kebab-case"

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group
    const { area } = this.props.pathContext;

    return (
      <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag =>
            <li key={tag.fieldValue}>
              <Link
                style={{
                  textDecoration: `none`,
                }}
                to={`${area}/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          )}
        </ul>
      </div>
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