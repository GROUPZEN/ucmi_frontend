import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<AboutUs />} exact />
      <Route path="/gallery" element={<Gallery />} exact />
      <Route path="/contact" element={<ContactUs />} exact />
      <Route path="/*" element={<PageNotFound />} exact />
    </Routes>
  );
}

export default App;
