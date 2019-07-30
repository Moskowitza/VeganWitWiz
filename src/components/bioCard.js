import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const BioWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  border-top: 3px solid ${props => props.color};
  box-shadow: 10px 10px 20px 6px ${props => props.shadow};
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  margin: 2rem;
  h1 {
  }
  img {
    max-height: 150px;
    margin: 0 2rem 0 1rem;
  }
`

const BioCard = ({ name, position, image, description, color, shadow }) => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <BioWrapper color={color} shadow={shadow}>
      <img src={image} alt={name} />
      <div>
        <animated.h2 style={{ ...spring }}>{name}</animated.h2>
        <h4>{position}</h4>
        <p>{description}</p>
      </div>
    </BioWrapper>
  )
}
export default BioCard
