import React from "react";

const AboutType = ({ position, name, number }) => {
  return (
    <div
      className={`about__type about__type--${position} about__type--${number}`}
    >
      <span className="secondary-heading">{number}</span>
      <span className="secondary-heading">{name}</span>
    </div>
  );
};

export default AboutType;
