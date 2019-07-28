import React, { useState } from "react"

const SaveForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitForm = event => {
    event.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      password,
    }
    localStorage.setItem("formData", JSON.stringify(data))
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }
  return (
    <form onSubmit={submitForm}>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default SaveForm
