import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ReactComponent as CloseIcon } from "../assets/svg/Close-icon-colored.svg";
import { ReactComponent as Instagram } from "../assets/svg/Instagram-icon-colored.svg";
import { ReactComponent as WhatsApp } from "../assets/svg/Whatsapp-icon-colored.svg";
import { ReactComponent as Facebook } from "../assets/svg/Facebook-icon-colored.svg";
import { ReactComponent as Youtube } from "../assets/svg/Youtube-icon-colored.svg";
import { appear, appearList, menuAnim } from "../utils/Animations";
import Wave from "./Wave";

const Menu = ({ setToggleMenu, toggleMenu }) => {
  return (
    <motion.div
      variants={menuAnim}
      initial="hidden"
      animate={toggleMenu ? "visible" : "exit"}
      className="menu"
    >
      <Wave />
      <div className="menu__welcome">
        <h3 className="body-heading">
          We are glad and thank you for visiting us. We hope to see you in our
          premises soon. Feel free to give us a call
        </h3>
      </div>
      <ul className="menu__links">
        <motion.li variants={appearList} custom={0} className="menu__link">
          <Link to="/">home</Link>
        </motion.li>
        <motion.li variants={appearList} custom={1} className="menu__link">
          <Link to="/about">about</Link>
        </motion.li>
        <motion.li variants={appearList} custom={2} className="menu__link">
          <Link to="/gallery">gallery</Link>
        </motion.li>
        <motion.li variants={appearList} custom={3} className="menu__link">
          <Link to="/contact">contact us</Link>
        </motion.li>
      </ul>
      <motion.div variants={appear} className="menu__socials">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web.facebook.com/groups/215346773125400"
          className="footer__socialmedia--icon"
        >
          <Facebook width={30} height={30} />
        </a>
        <a
          href="https://www.instagram.com/ucmi.ghana/"
          target="_blank"
          rel="noreferrer"
          className="footer__socialmedia--icon"
        >
          <Instagram width={30} height={30} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCMrp5wXdwz4_b2i0hlFewsQ"
          className="footer__socialmedia--icon"
        >
          <Youtube width={30} height={30} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/grouplink"
          className="footer__socialmedia--icon"
        >
          <WhatsApp width={30} height={30} />
        </a>
      </motion.div>
      <div className="menu__close" onClick={() => setToggleMenu(!toggleMenu)}>
        <CloseIcon className="menu__close--btn" width={24} height={24} />
      </div>
    </motion.div>
  );
};

export default Menu;
