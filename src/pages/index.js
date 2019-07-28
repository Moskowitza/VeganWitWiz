import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Listing from "../components/listing"

import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Listing />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about">abouts</Link>
  </Layout>
)

export default IndexPage
