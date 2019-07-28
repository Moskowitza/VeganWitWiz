import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Archive from "../components/archive"
import Listing from "../components/listing"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Listing />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about">abouts</Link>
    <Archive />
  </Layout>
)

export default IndexPage
