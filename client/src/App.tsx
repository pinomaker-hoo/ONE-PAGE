import { Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  )
}
