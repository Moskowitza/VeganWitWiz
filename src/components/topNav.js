import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TopNavStyle = styled.nav`
  grid-area: topNav;
  border-top: solid 2px black;
  display: flex;
  padding: 1rem;
  background: #eceddc;
  justify-content: flex-end;
  a {
    size: 18 px;
    color: #ba70fa;
    font-family: "Alfa Slab One", cursive;
    text-decoration: none;
    padding: 0.4rem;
  }
  a:hover {
    background: pink;
    border-radius: 5px;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`

const TopNav = () => (
  <TopNavStyle>
    <Link to="/page-2/">Shop</Link>
    <Link to="/about">About Us</Link>
  </TopNavStyle>
)

export default TopNav
