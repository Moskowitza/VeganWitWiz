import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"
import Header from "./header"
import Footer from "./footer"
import TopNav from "./topNav"
import Archive from "./archive"
import "./layout.css"

const MainWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 5% auto auto auto;
  grid-template-areas:
    "header header header header"
    "topNav topNav topNav topNav"
    "hero hero hero hero"
    "sidebar main main main"
    "footer footer footer footer";
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "header "
      "topNav"
      "sidebar"
      "main"
      "footer";
  }
`
const Layout = ({ children, location }) => {
  const { pathname } = location
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "bbCS.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const spring = useSpring({
    to: { height: pathname === "/" ? 200 : 100 },
    from: { height: pathname === "/" ? 100 : 200 },
  })

  return (
    <>
      <MainWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <TopNav />
        {location.pathname === "/" && (
          <animated.div
            style={{ gridArea: "hero", overflow: "hidden", ...spring }}
          >
            <Img fluid={data.file.childImageSharp.fluid} />
          </animated.div>
        )}

        <Archive />
        <main style={{ gridArea: "main" }}>{children}</main>
        <Footer />
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
