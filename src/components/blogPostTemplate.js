import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "./layout"

const BlogTemplate = styled.main`
  grid-area: main;
`
const blogPostTemplate = ({ data, location }) => {
  const { markdownRemark } = data
  return (
    <Layout location={location}>
      <BlogTemplate>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </BlogTemplate>
    </Layout>
  )
}
export default blogPostTemplate

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        hero {
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
