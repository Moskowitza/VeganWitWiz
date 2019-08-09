import React from "react"

import NavBar from "../components/NavBar"

import Layout from "../components/layout"

const lambda = ({ location }) => {
  fetch("/.netlify/functions/hello")
    .then(response => response.json())
    .then(console.log)
  return (
    <Layout location={location}>
      <NavBar />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </Layout>
  )
}

export default lambda
