import React from "react";

import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Giving from "../components/Giving";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";

const Home = () => {
  return (
    <main>
      <NavMenu />
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
