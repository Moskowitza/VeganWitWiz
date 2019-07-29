import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  grid-area: header;
  background: darkcyan;
  padding: 2rem;
  h1 {
    text-align: center;
    display: inline-block;
    position: relative;
    width: 100%; /*Add this*/
  }
  a {
    color: pink;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
