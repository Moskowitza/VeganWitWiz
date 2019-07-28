import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TopNavStyle = styled.nav`
  display: flex;
  background: darkgrey;
  justify-content: flex-end;
`

const TopNav = () => (
  <TopNavStyle>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about">abouts</Link>
  </TopNavStyle>
)

export default TopNav
