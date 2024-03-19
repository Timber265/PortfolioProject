import { Outlet } from "react-router-dom"
import Header from "../pages/Header"
import Footer from "../pages/Footer"
export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}