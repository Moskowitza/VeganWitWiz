import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Vegan Wit Wiz.</p>
    <p>
      Vegan With Wiz is a sweet blog about vegan cheese steaks in Philadlephia.
    </p>

    <Link to="/">Home</Link>
  </Layout>
)

export default About