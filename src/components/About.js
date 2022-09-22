import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import aboutJson from "../api/about.json";

import AboutContainer from "../components/AboutContainer";

const About = ({ home }) => {
  const [about, setAbout] = useState();

  useEffect(() => {
    setAbout(aboutJson.about);
  }, []);

  return (
    <section className="about">
      {about?.map((item, index) => (
        <AboutContainer
          key={index}
          position={item.position}
          number={item.number}
          name={item.name}
          message={item.message}
          quote={item.quote}
        />
      ))}
      {home && (
        <div className="about__link">
          <Link to="about">View more about</Link>
        </div>
      )}
    </section>
  );
};

export default About;
