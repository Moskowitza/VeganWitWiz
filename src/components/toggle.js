import React, { useState } from "react"

const Toggle = ({ children }) => {
  const [isToggled, setToggled] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setToggled(!isToggled)}>
        x
      </button>
      {isToggled && <div>{children}</div>}
    </>
  )
}
export default Toggle
