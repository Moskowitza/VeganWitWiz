import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  grid-area: header;
  background: darkcyan;
  font-family: "Alfa Slab One", cursive;
  padding: 2rem;
  h1,
  p {
    text-align: center;
    display: inline-block;
    position: relative;
    width: 100%; /*Add this*/
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: lightblue;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <p>Real Philadelphia Cheese Steaks</p>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
