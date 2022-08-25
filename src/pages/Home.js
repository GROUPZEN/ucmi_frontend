import React from "react";

import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Giving from "../components/Giving";
import Header from "../components/Header";

import Nav from "../components/Nav";

const Home = () => {
  return (
    <main>
      <Nav />
      <Header />
      <Giving />
      <About home={true} />
      <Events />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Home;
