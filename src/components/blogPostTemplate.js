import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

const blogPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
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
      }
    }
  }
`
