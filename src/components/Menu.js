import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../assets/svg/Close-icon.svg";
import { ReactComponent as Instagram } from "../assets/svg/Instagram-icon.svg";
import { ReactComponent as WhatsApp } from "../assets/svg/Whatsapp-icon.svg";
import { ReactComponent as Facebook } from "../assets/svg/Facebook-icon.svg";
import Email from "../assets/svg/EmailIcon";
import { ReactComponent as Youtube } from "../assets/svg/Youtube-icon.svg";

const Menu = ({ setToggleMenu, toggleMenu }) => {
  return (
    <div className={toggleMenu ? `menu menu-active` : "menu"}>
      <div className="menu__links">
        <ul className="menu__link">
          <li className="menu__link--item">
            <Link to="/">home</Link>
          </li>
          <li className="menu__link--item">
            <Link to="/about">about</Link>
          </li>
          <li className="menu__link--item">
            <Link to="/gallery">gallery</Link>
          </li>
          <li className="menu__link--item">
            <Link to="/contact">contact us</Link>
          </li>
        </ul>
      </div>
      <div className="menu__info">
        <div className="menu__quotes menu__quotes--1 big-body-heading">
          <span>
            The United Christian Ministries International is an enduring church.
            With Christ as our Head, we take His ministry and example unto
            ourselves.
          </span>
        </div>
        <div className="menu__quotes menu__quotes--2 big-body-heading">
          <span>
            The Dove represents the Holy Spirit, on whom we rely completely for
            the signs and wonders that brings our deliverance and commitments
            into reality.
          </span>
        </div>
        <div className="menu__background">
          <div className="menu__background--btn">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:greaterworks.ucmi@gmail.com"
              className="footer__socialmedia--icon btn btn__email big-body-heading"
            >
              email us
              <Email color="#28303F" width={30} height={30} />
            </a>
          </div>
          <div className="menu__background--name stroke-heading">ucmi</div>
          <div className="menu__background--socials">
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
          </div>
        </div>
      </div>
      <div className="menu__close" onClick={() => setToggleMenu(!toggleMenu)}>
        <CloseIcon className="menu__close--btn" width={24} height={24} />
      </div>
    </div>
  );
};

export default Menu;
