import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styled from "styled-components"

const FooterArea = styled.footer`
  grid-area: footer;
  background: #ba70fa;
  min-height: 100px;
  color: #eceddc;
  font-size: 20px;
  span {
    color: #eceddc;
    text-align: center;
    display: inline-block;
    position: relative;
    width: 100%; /*Add this*/
  }
  a {
    color: #eceddc;
  }
  a:hover {
    color: darkgoldenrod;
    background-color: darkgrey;
    border-radius: 4px;
  }
`

const Footer = () => (
  <FooterArea>
    <span>
      {`© ${new Date().getFullYear()},  Built with `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  </FooterArea>
)

export default Footer
