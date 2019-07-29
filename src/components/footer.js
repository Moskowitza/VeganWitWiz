import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import styled from "styled-components"

const FooterArea = styled.footer`
  grid-area: footer;
  background: darkblue;
  color: white;
`

const Footer = () => (
  <FooterArea>
    {`© ${new Date().getFullYear()},`} Built with    {" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterArea>
)

export default Footer
