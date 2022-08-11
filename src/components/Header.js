import React from "react";
import Giving from "./Giving";
import Herobox from "./Herobox";
import Nav from "./Nav";

const Header = () => {
  return (
    <section className="header">
      <Nav />
      <Herobox />
      <Giving />
    </section>
  );
};

export default Header;
