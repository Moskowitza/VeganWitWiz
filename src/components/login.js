import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"

const login = () => {
  const handleSubmit = () => handleLogin(user => navigate(`/app/profile`))

  return (
    <>
      <h1>Log in</h1>
      <button type="button" onClick={handleSubmit}>
        login
      </button>
    </>
  )
}
export default login
