import { Routes, Route } from "react-router"
import Home from "../pages/Home"
import Navbars from "../pages/Navbar"
import UserRegister from "../pages/UserRegister"
import UserTable from "../pages/UserTable"
import Task3 from "../pages/Task3"

const Template = () => {
  return (
    <div>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/user-register" element={<UserRegister/>}></Route> */}
        <Route path="/user-register/:id?" element={<UserRegister/>}></Route>
        <Route path="/user-table" element={<UserTable/>}></Route>
        <Route path="/task3" element={<Task3/>}></Route>
      </Routes>
    </div>
  )
}

export default Template

