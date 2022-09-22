import React from "react";
import AboutType from "./AboutType";

const AboutContainer = ({ position, name, number, message, quote }) => {
  return (
    <div className="about__container">
      <AboutType number={number} name={name} position={position} />
      <div className={`about__message about__message--${number}`}>
        {message}
        <span className="about__message--quote">{quote}</span>
      </div>
    </div>
  );
};

export default AboutContainer;
