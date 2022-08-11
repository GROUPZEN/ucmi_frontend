import React from "react";
import Theme from "./Theme";

import HeroHolder from "../assets/svg/hero_holder.svg";
import HeroPicture from "../assets/images/Rev-Andrews-Home.png";

const Herobox = () => {
  return (
    <div className="herobox">
      <div className="herobox__container">
        <div className="herobox__left">
          <img src={HeroHolder} alt="SVG for the background hero" />
          <img
            className="herobox__left--picture"
            src={HeroPicture}
            alt="Rev. Andrews Ahene Profile"
          />
          <div className="herobox__left--name">
            <h3>rev. andrew ahene</h3>
            <span>head pastor</span>
          </div>
        </div>
        <div className="herobox__right">
          <div className="herobox__right--main">
            <h1>
              Join our
              <span className="primary-linear-heading"> family </span>,<br /> we
              want to help you <br /> on your
              <span className="primary-linear-heading"> journey.</span>
            </h1>
          </div>
          <div className="herobox__right--sub">
            <h3>
              We welcome you to our newsletter, join our mailing <br /> list and
              let us help you with your Christian life.
            </h3>
          </div>
          <div className="herobox__right--newsletter">
            <form id="form-newsletter" className="form" action="#">
              <input
                placeholder="Enter email address"
                className="input input__newsletter"
                type="email"
                name="email"
                id="email"
              />
              <button
                className="btn btn__primary primary-linear-background"
                type="submit"
              >
                Join our newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
      <Theme />
    </div>
  );
};

export default Herobox;
