import axios from "axios"
import { useState } from "react"
import { useNull } from "../../util/common"
import { setCookie } from "../../util/Cookie"

export default function Login() {
  const [user, setUser] = useState({ email: "", pw: "" })
  const onChange = (event: any) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onClick = async () => {
    if (!useNull(Object.values(user))) return alert("NULL")
    try {
      const config = {
        method: "post",
        url: "http://localhost:8080/auth/login",
        data: user,
      }
      const { data } = await axios(config)
      setCookie("accesstoken", data.token)
      localStorage.setItem("info", JSON.stringify({ info: data.info.name }))
    } catch (err) {
      console.log(err)
    }
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
