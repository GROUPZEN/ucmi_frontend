import React from "react";

import Herobox from "./Herobox";
import Nav from "./Nav";

const Header = () => {
  return (
    <section className="header">
      <Nav />
      <Herobox />{" "}
    </section>
  );
};

export default Header;
