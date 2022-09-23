import React, { useRef } from "react";
import { motion } from "framer-motion";

import LogoLarge from "../assets/images/logo-large.png";
import { navAppear } from "../utils/Animations";

const Nav = ({ setToggleMenu, toggleMenu }) => {
  const navEle = useRef();

  document.addEventListener("scroll", () => {
    window.scrollY >= 5
      ? navEle.current?.classList.add("nav-scrolled")
      : navEle.current?.classList.remove("nav-scrolled");
  });

  return (
    <motion.nav
      variants={navAppear}
      initial="hidden"
      animate="visible"
      ref={navEle}
      className="nav"
    >
      <div className="nav__img">
        <img
          src={LogoLarge}
          alt="Logo of the church"
          className="nav__img--file"
        />
      </div>
      <div className="nav__name">
        <h3>united christian ministries international</h3>
        <span>For the believers in Christ</span>
      </div>
      <div className="nav__menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <span className="primary-linear-heading">menu</span>
      </div>
    </motion.nav>
  );
};

export default Nav;
