import React from "react";

const Leader = ({ name, title, image }) => {
  return (
    <div className="about__leader--item">
      <div className="about__leader--image">
        <img src={image} alt={`${name}`} className="about__leader--img" />
      </div>
      <div className="about__leader--name">{name}</div>
      <div className="about__leader--title">{title}</div>
      <div className="about__leader--church">UCMI - Greater-Works Assembly</div>
    </div>
  );
};

export default Leader;
