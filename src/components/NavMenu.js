import React, { useState } from "react";
import Menu from "./Menu";
import Nav from "./Nav";

const NavMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Nav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {toggleMenu && (
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
    </>
  );
};

export default NavMenu;
