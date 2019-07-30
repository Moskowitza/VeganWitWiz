import React from "react"
import styled from "styled-components"

const BioWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  border: 1px solid blue;
  padding: 1rem;
  display: flex;
  img {
    max-height: 150px;
    margin: 0 2rem 0 1rem;
  }
`

const BioCard = ({ name, role, image, description }) => (
  <BioWrapper>
    <img src={image} alt={name} />
    <div>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  </BioWrapper>
)
export default BioCard
