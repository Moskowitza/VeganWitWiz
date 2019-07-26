import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const LISTING_QUERY = graphql`
  query BlogListing {
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM/DD/YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            <h1>{node.frontmatter.title}</h1>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <span>
            <Link to={`/posts/${node.frontmatter.slug}`}>read</Link>
          </span>
        </div>
      ))
    }
  />
)

export default Listing
