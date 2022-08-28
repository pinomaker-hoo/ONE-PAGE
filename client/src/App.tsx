import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth/Index"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Choice from "./pages/Choice"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </div>
  )
}
