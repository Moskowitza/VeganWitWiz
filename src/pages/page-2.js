import React from "react"
import { Link } from "gatsby"
import TopNav from "../components/topNav"
import SEO from "../components/seo"
import Layout from "../components/layout"
import StarRating from "../components/starRating"
import SaveForm from "../components/form"

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <TopNav />
    <SEO title="shop" />
    <h1>Hi, Our shop will be coming soon.</h1>
    <StarRating rating={2} />
    <SaveForm />
    <p>
      Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
      sapiente iusto soluta quod blanditiis ut harum praesentium. Reiciendis,
      rerum repellat.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
