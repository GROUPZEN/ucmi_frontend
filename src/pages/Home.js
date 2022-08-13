import React from "react";
import About from "../components/About";
import Events from "../components/Events";
import Giving from "../components/Giving";

import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <Giving />
      <About home={true} />
      <Events />
    </main>
  );
};

export default Home;
