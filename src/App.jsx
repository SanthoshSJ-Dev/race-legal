import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import AccountingAuditAssurance from "./pages/services/AccountingAuditAssurance";
import Contact from "./pages/ContactUs";
import NavBar from "./components/NavBar";
import Advisory from "./pages/services/Advisory";
import Legal from "./pages/services/Legal";
import Tax from "./pages/services/Tax";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/triple-a"
          element={<AccountingAuditAssurance />}
        />
        <Route path="/services/advisory" element={<Advisory />} />
        <Route path="/services/legal" element={<Legal />} />
        <Route path="/services/tax" element={<Tax />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
