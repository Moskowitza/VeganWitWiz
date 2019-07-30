import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import aaronsFace from "../images/facePngs/myFace.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BioCard from "../components/bioCard"

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Vegan Wit Wiz.</p>
    <p>
      Vegan With Wiz is a sweet blog about vegan cheese steaks in Philadlephia.
    </p>
    <Link to="/"> Home</Link>
    <BioCard name="aaron" description="A real cool dude." image={aaronsFace}>
      {/* <AaronImage /> */}
    </BioCard>
  </Layout>
)

export default About
