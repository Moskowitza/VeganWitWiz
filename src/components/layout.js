import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"
import Header from "./header"
import Archive from "./archive"
// import "./layout.css"

const MainWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
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
      <Header siteTitle={data.site.siteMetadata.title} />

      {
        <animated.div style={{ overflow: "hidden", ...spring }}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </animated.div>
      }

      {/* {location.pathname === "/" && (
        <Img fluid={data.file.childImageSharp.fluid} />
      )} */}

      <MainWrapper>
        <Archive />
        <main>{children}</main>
      </MainWrapper>
      <footer>
        © {new Date().getFullYear()}, Built with
                {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
