import { Route, Routes } from "react-router-dom"
import Footer from "./commonComponents/Footer"
import Header from "./commonComponents/Header"
import AboutUs from "./features/About Us/AboutUs"
import Home from "./features/Home/Home"
import Servicess from "./features/Servicess/Servicess"


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/services" element={<Servicess/>} />
      <Route  path="/aboutus" element={<AboutUs />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
