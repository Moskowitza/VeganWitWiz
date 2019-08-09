import React from "react"
import Layout from "../../components/layout"
import NavBar from "../../components/NavBar"

// remember everything in /app/* is dynamic now!
const Main = () => {
  return (
    <Layout>
      <NavBar />
      <div>Main</div>
    </Layout>
  )
}

export default Main
