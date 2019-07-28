import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StarWrapper = styled.div`
  .star-rating__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  .star-rating__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ababab;
    transition: color 0.2s ease-out;
  }
  .star-rating__star:hover {
    cursor: pointer;
  }
  .star-rating__star.is-selected {
    color: #ffd700;
  }
  .star-rating__star.is-disabled:hover {
    cursor: default;
  }
`
//
const StarRating = ({ rating }) => {
  const [count, setCount] = useState(rating)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
//   const [newRating, setNewRating] = useState(rating)
//   const stars = []

//   for (let i = 0; i < 5; i++) {
//     let klass = "star-rating__star"

//     if (newRating >= i && newRating != null) {
//       klass += " is-selected"
//     }

//     stars.push(
//       <label
//         className={klass}
//         onClick={setNewRating(i)}
//         onMouseOver={setNewRating(i)}
//         onMouseOut={setNewRating(rating)}
//       >
//         {" "}
//         ★
// {" "}
//       </label>
//     )
//   }

//   return <div className="star-rating">{stars}</div>
// }

export default StarRating
