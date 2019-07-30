import React from "react"
import styled from "styled-components"

const BioWrapper = styled.div`
  border: 1px solid blue;
  padding: 1rem;
  img {
    max-height: 150px;
  }
`

const BioCard = ({ name, image, description }) => (
  <BioWrapper>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{description}</p>
  </BioWrapper>
)
export default BioCard
