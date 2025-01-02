import { Route, Routes } from "react-router-dom"
import Footer from "./commonComponents/Footer"
import Header from "./commonComponents/Header"
import AboutUs from "./features/About Us/AboutUs"
import Home from "./features/Home/Home"


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route  path="/aboutus" element={<AboutUs />} />
      <Route  path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
