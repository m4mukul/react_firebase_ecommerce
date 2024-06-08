/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

const Layout = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout