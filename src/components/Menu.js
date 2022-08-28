import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = ({ setToggleMenu, toggleMenu }) => {
  const rootEle = document.querySelector("#root");

  const disableScolling = () => {
    rootEle.style.maxHeight = "100vh";
    rootEle.style.height = "100vh";
    rootEle.style.overflow = "hidden";
  };

  const enableScrolling = () => {
    rootEle.style.maxHeight = "";
    rootEle.style.height = "";
    rootEle.style.overflow = "show";
  };

  useEffect(() => {
    toggleMenu ? disableScolling() : enableScrolling();
  }, [toggleMenu]);

  return (
    <div className="menu">
      <div className="menu__links">
        <ul className="menu__link">
          <li className="menu__link--item">
            <Link to="/">home</Link>
          </li>
        </ul>
        <ul className="menu__link">
          <li className="menu__link--item">
            <Link to="/about">about</Link>
          </li>
        </ul>
        <ul className="menu__link">
          <li className="menu__link--item">
            <Link to="/gallery">gallery</Link>
          </li>
        </ul>
        <ul className="menu__link">
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
            <button className="btn btn__email big-body-heading">
              email us
            </button>
          </div>
          <div className="menu__background--name stroke-heading">ucmi</div>
          <div className="menu__background--socials"></div>
        </div>
      </div>
      <div className="menu__close" onClick={() => setToggleMenu(!toggleMenu)}>
        <button className="menu__close--btn">cls</button>
      </div>
    </div>
  );
};

export default Menu;
