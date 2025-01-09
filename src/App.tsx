import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./commonComponents/Footer";
import Header from "./commonComponents/Header";

// Use React.lazy for lazy loading components
const AboutUs = lazy(() => import("./features/About Us/AboutUs"));
const Home = lazy(() => import("./features/Home/Home"));
const Servicess = lazy(() => import("./features/Servicess/Servicess"));
const Careers = lazy(() => import("./features/Careers/Careers"));
const ContactPage = lazy(() => import("./features/Contact/Contact"));
const Products = lazy(() => import("./features/Products/Products"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="bg-transparent"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Servicess />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Suspense>
     
    </>
  );
}

export default App;
