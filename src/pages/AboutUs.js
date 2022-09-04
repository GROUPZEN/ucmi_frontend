import React, { useState, useEffect } from "react";

import Leader from "../components/Leader";
import Nav from "../components/Nav";
import About from "../components/About";
import Activities from "../components/Activities";

import { ReactComponent as PrevIcon } from "../assets/svg/prev-icon.svg";
import { ReactComponent as NextIcon } from "../assets/svg/next-icon.svg";

import about from "../api/about.json";

import Rev from "../assets/images/Rev-Andrews-About.png";
import Pst from "../assets/images/Pst-Andy-About.png";
import Freda from "../assets/images/Ms-Freda-About.png";
import Emma from "../assets/images/Ms-Emma-About.png";
import Sarah from "../assets/images/Ms-Sarah-About.png";

import SundayFlyer from "../assets/images/flyers/sunday-service.png";
import Footer from "../components/Footer";
// import ExousiaFlyer from "../assets/images/flyers/exousia.png";

const AboutUs = () => {
  const [values, setValues] = useState();
  const [currentActivity, setCurrentActivity] = useState(about.activities[0]);
  const [acivities, setAcivities] = useState();

  useEffect(() => {
    setValues(about.values);
    setAcivities(about.activities);
  }, []);

  return (
    <main>
      <div className="section-background">
        <Nav />
        <section className="pageheader">
          <figure className="pageheader__image--container pageheader__image--container-about">
            <h4 className="pageheader__image--title secondary-heading">
              about us
            </h4>
            <figcaption className="pageheader__image--description">
              The United Christian Ministries International is an enduring
              church. With Christ as our Head, we take His ministry and example
              unto ourselves. <br /> <br /> Just as in Christ, there is the
              abiding hope of abundant life, we are committed to the certainty
              of life and hope in a world constantly in crisis and torn in
              tribulation. We acknowledge that in our call and challenge to
              ministry, there are resources available to us; the love of God,
              compassion for each other, commitment to our community and an
              understanding of tithing and stewardship for the support of our
              work. <br /> <br /> <br /> WE BOLDLY CLAIM IT.
            </figcaption>
          </figure>
        </section>
        <About />
        <section className="about__values--container">
          <div className="about__heading">
            <h3 className="about__heading--title secondary-heading">
              our core values
            </h3>
          </div>
          <div className="about__values">
            {values?.map((value) => (
              <div className="about__value">{value}</div>
            ))}
          </div>
        </section>
        <section className="about__leaders">
          <div className="about__heading">
            <h3 className="about__heading--title secondary-heading">
              our leaders
            </h3>
          </div>
          <div className="about__leaders--container about__leaders--container-2">
            <Leader image={Rev} name="rev. andrews ahene" title="lead pastor" />
            <Leader
              image={Pst}
              name="pst. andrews yiadom"
              title="associate pastor/president of the youth ministry"
            />
          </div>
          <div className="about__leaders--container about__leaders--container-3">
            <Leader
              image={Freda}
              title="president of women's ministry"
              name="mrs. freda ahene"
            />
            <Leader
              image={Emma}
              title="tresurer/executive member of the women's ministry"
              name="elder emma cofie"
            />
            <Leader
              image={Sarah}
              name="elder sarah alimo"
              title="executive member of the women's ministry"
            />
          </div>
        </section>
        <section className="about__activities">
          <div className="about__heading">
            <h3 className="about__heading--title secondary-heading">
              meeting days & activities
            </h3>
          </div>
          <div className="activities">
            <ul className="activities__days">
              {acivities?.map((activity, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentActivity(activity)}
                  className={
                    currentActivity?.day === activity.day
                      ? "activities__day activities__day--active"
                      : "activities__day"
                  }
                >
                  {activity.day}
                </li>
              ))}
            </ul>
            {
              <Activities
                address="gd-053-2664"
                venue="greater-works"
                timeFrom={currentActivity.timeFrom}
                timeTo={currentActivity.timeTo}
                img={SundayFlyer}
                days={currentActivity.day}
              />
            }
          </div>
        </section>
        {/* <section className="about__groups">
          <div className="about__heading">
            <h3 className="about__heading--title secondary-heading">
              departments & groups
            </h3>
          </div> 
          <div className="groups">
            <div className="groups__container">
              <div className="groups__scroller">
                <div className="groups__data">
                  
                </div>
              </div> 
               <div className="groups__controller">
                <div className="groups__controller--icon groups__controller--prev">
                  <PrevIcon />
                </div>
                <div className="groups__controller--icon groups__controller--next">
                  <NextIcon />
                </div>
              </div> 
            </div>
          </div>
        </section>
              */}
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
