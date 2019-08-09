import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Listing from "../components/listing"

import SEO from "../components/seo"

const lambda = ({ location }) => {
  fetch("/.netlify/functions/hello")
    .then(response => response.json())
    .then(console.log)
  return (
    <Layout location={location}>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </Layout>
  )
}

export default lambda
