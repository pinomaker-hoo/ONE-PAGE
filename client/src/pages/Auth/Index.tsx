import { Link } from "react-router-dom"

export default function Auth() {
  return (
    <div>
      <h1>AUTH PAGE</h1>
      <Link to={"/auth/login"}>
        <button>LOGIN</button>
      </Link>
      <Link to={"/auth/register"}>
        <button>REGISTER</button>
      </Link>
    </div>
  )
}
