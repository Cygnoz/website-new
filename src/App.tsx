import { Route, Routes } from "react-router-dom"
import Footer from "./commonComponents/Footer"
import Header from "./commonComponents/Header"
import AboutUs from "./features/About Us/AboutUs"


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route  path="/aboutus" element={<AboutUs />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
