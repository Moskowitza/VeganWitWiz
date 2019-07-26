import { graphql } from "gatsby"

export default graphql`
  query BlogArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
