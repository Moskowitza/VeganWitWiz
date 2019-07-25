import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPostArchive {
        allMarkdownRemark {
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
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map(edge => (
            <li>{edge.node.frontmatter.title}</li>
          ))}
        </aside>
      </>
    )}
  />
)
