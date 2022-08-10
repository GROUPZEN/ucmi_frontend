import React from "react";

import LogoLarge from "../assets/images/logo-large.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__img">
        <img
          src={LogoLarge}
          alt="Logo of the church"
          className="nav__img--file"
        />
      </div>
      <div className="nav__name">
        <h3 className="">united christian ministries international</h3>
      </div>
      <div className="nav__menu">
        <span className="primary-linear-heading">menu</span>
      </div>
    </nav>
  );
};

export default Nav;
