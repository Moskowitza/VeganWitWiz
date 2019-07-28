import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"

const blogPostTemplate = ({ data, location }) => {
  const { markdownRemark } = data
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <Img fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid} />
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
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
