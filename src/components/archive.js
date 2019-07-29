import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

const ArchiveWrapper = styled.div`
  grid-area: sidebar;
  padding: 1rem;
  font-family: "Alfa Slab One", cursive;
  display: flex;
  flex-direction: column;
  background: black;
  color: white;

  @media only screen and (max-width: 600px) {
    background-color: lightblue;
  }
`
const ArchiveList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: white;
`
const ArchiveListText = styled.span`
  color: white;
  &:hover {
    background: palevioletred;
  }
`

const POST_ARCHIVE_QUERY = graphql`
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

export default ({ location }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <ArchiveWrapper>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`posts/${edge.node.frontmatter.slug}`}>
                  <ArchiveListText>
                    {" "}
                    {edge.node.frontmatter.title}
                  </ArchiveListText>
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </ArchiveWrapper>
    )}
  />
)
