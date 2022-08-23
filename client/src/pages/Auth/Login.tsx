import axios from "axios"
import { useState } from "react"

export default function Login() {
  const [user, setUser] = useState({ email: "", pw: "" })
  const onChange = (event: any) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onClick = async () => {
    const config = {
      method: "post",
      url: "http://localhost:8080/auth/login",
      data: user,
    }
    const res = await axios(config)
    console.log(res)
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input onChange={onChange} name="email" placeholder="Enter ID" />
      <input onChange={onChange} name="pw" placeholder="Enter PW" />
      <button onClick={onClick}>LOGIN</button>
    </div>
  )
}
