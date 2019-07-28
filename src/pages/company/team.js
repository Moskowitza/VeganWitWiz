import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p> Vegan Wit Wiz Team</p>
    <p>The Team </p>

    <Link to="/">Home</Link>
  </Layout>
)

export default About
