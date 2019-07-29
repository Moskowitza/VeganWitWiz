import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TopNavStyle = styled.nav`
  grid-area: topNav;
  display: flex;
  padding-right: 1rem;
  background: darkgrey;
  justify-content: flex-end;
  a {
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 0.4rem;
  }
  a:hover {
    background: pink;
    border-radius: 5px;
  }
`

const TopNav = () => (
  <TopNavStyle>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about">abouts</Link>
  </TopNavStyle>
)

export default TopNav
