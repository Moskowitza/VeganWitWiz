import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  grid-area: header;

  background: #36c;
  background: linear-gradient(135deg, #eceddc 25%, transparent 25%) -20px 0,
    linear-gradient(225deg, #eceddc 25%, transparent 25%) -20px 0,
    linear-gradient(315deg, #eceddc 25%, transparent 25%),
    linear-gradient(45deg, #eceddc 25%, transparent 25%);
  background-size: 40px 40px;
  background-color: #f2c6c2;
  padding: 2rem;
  h1 {
    font-family: "Shadows Into Light Two", cursive;
    font-size: 80px;
    text-shadow: 2px 2px 4px #000000;
  }
  h1,
  p {
    font-size: 20 px;
    font-family: "Alfa Slab One", cursive;
    text-align: center;
    display: inline-block;
    position: relative;
    width: 100%; /*Add this*/
  }
  a {
    color: #eceddc;
    font-family: "Shadows Into Light Two", cursive;
    text-decoration: none;
  }
  a:hover {
    color: lightblue;
  }
  @media only screen and (max-width: 600px) {
    padding: 2px;
    h1 {
      font-size: 50px;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 16px;
    }
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
