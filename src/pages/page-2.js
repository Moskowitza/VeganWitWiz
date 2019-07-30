import React from "react"
import { Link } from "gatsby"
import TopNav from "../components/topNav"
import SEO from "../components/seo"
import Layout from "../components/layout"
import StarRating from "../components/starRating"
import SaveForm from "../components/form"
import Toggle from "../components/toggle"

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="shop" />
    <h1>Hi, Our shop will be coming soon.</h1>
    <p>
      We&apos;ll be posting some items to our shop very soon. In the meantime
      keep up to date with this blog and follow us on instagram.
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
