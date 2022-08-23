import axios from "axios"
import { useState } from "react"
import { useCheck, useNull } from "../../util/common"

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    pw: "",
    name: "",
    num: "",
    phone: "",
    pwc: "",
  })

  const onChange = (event: any) => {
    const { value, name } = event.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const onClick = async () => {
    if (!useNull(Object.values(user))) return alert("NULL ERROR")
    if (!useCheck(user.pw, user.pwc)) return alert("PWC, PW NOT SAME")
    try {
      const config = {
        method: "post",
        url: "http://localhost:8080/auth",
        data: user,
      }
      const res = await axios(config)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Register Page</h1>
      <input
        name="email"
        onChange={onChange}
        type="text"
        placeholder="Enter EMAIL"
      />
      <input
        name="pw"
        onChange={onChange}
        type="password"
        placeholder="Enter PW"
      />
      <input
        name="pwc"
        onChange={onChange}
        type="password"
        placeholder="Enter PWC"
      />
      <input
        name="name"
        onChange={onChange}
        type="text"
        placeholder="Enter NAME"
      />
      <input
        name="phone"
        onChange={onChange}
        type="text"
        placeholder="Enter Phone"
      />
      <input
        name="num"
        onChange={onChange}
        type="number"
        placeholder="Enter NUMBER"
      />
      <button onClick={onClick}>Register</button>
    </div>
  )
}
