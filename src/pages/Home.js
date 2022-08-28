import React, { useState } from "react";

import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Giving from "../components/Giving";
import Header from "../components/Header";
import Menu from "../components/Menu";

import Nav from "../components/Nav";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <main>
      <Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {toggleMenu && (
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
      <div className="section-background">
        <Header />
        <Giving />
        <About home={true} />
        <Events />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
