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
    <BioCard
      shadow="pink"
      color="red"
      name="Aaron"
      role="Webmaster & Eater"
      description="I'm a fullstack developer and love working with React and Node and mentoring new developers. When I'm not sampling Philadephia vegan cheese steaks I'm rock-climbing or spending time with my family. Other hobbies include: eating vegan cheese steaks, writing about vegan cheese steaks, photographing vegan cheese steaks, and collecting data on vegan cheese steaks."
      image={aaronsFace}
    />
    <BioCard
      name="Aaron"
      position="Webmaster & Eater"
      description="I'm a fullstack developer and love working with React and Node and mentoring new developers. When I'm not sampling Philadephia vegan cheese steaks I'm rock-climbing or spending time with my family. Other hobbies include: eating vegan cheese steaks, writing about vegan cheese steaks, photographing vegan cheese steaks, and collecting data on vegan cheese steaks."
      image={aaronsFace}
    />
  </Layout>
)

export default About
