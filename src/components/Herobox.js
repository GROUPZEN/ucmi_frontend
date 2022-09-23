import React, { useRef, useState } from "react";
import Theme from "./Theme";
import { motion } from "framer-motion";

import HeroHolder from "../assets/svg/hero_holder.svg";
import HeroPicture from "../assets/images/Rev-Andrews-Home.png";
import { sendNewsletter } from "../api";
import { appear, fromBottom, heroAnim } from "../utils/Animations";

const Herobox = () => {
  const [newsletterStatus, setNewsletterStatus] = useState(false);
  const newsletterBtn = useRef();

  const handleSubmitNewsletter = (e) => {
    e.preventDefault();

    sendNewsletter(e.target.firstChild.value)
      .then(() => {
        newsletterBtn.current.innerHTML = "Thanks for subscribing";

        e.target.classList.add("contact__newsletter--form-disappear");

        setTimeout(() => setNewsletterStatus(true), 1100);
      })
      .catch((err) => console.log(err.code, err.message));
  };

  return (
    <div className="herobox">
      <div className="herobox__container">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 2.5 }}
          className="herobox__left"
        >
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
        </motion.div>
        <motion.div
          variants={heroAnim}
          initial="hidden"
          animate="visible"
          className="herobox__right"
        >
          <div className="herobox__right--main">
            <h1>
              <motion.span variants={fromBottom}>
                Join our
                <span className="primary-linear-heading"> family,</span>
              </motion.span>
              <motion.span variants={fromBottom}>
                we want to help you
              </motion.span>
              <motion.span variants={fromBottom}>
                on your
                <span className="primary-linear-heading"> journey.</span>
              </motion.span>
            </h1>
          </div>
          <motion.div
            variants={appear}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2, duration: 1 }}
            className="herobox__right--sub"
          >
            <h3>
              We welcome you to our newsletter, join our mailing <br /> list and
              let us help you with your Christian life.
            </h3>
          </motion.div>
          <motion.div
            variants={appear}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 2 }}
            className="herobox__right--newsletter"
          >
            {newsletterStatus ? (
              <div className="contact__newsletter--confirm">
                <h5>
                  Please check your email to comfirm subscription for our
                  newsletter. Thank you!😊
                </h5>
              </div>
            ) : (
              <motion.form
                onSubmit={handleSubmitNewsletter}
                id="form-newsletter"
                className="form"
              >
                <input
                  placeholder="Enter email address"
                  className="input input__newsletter"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <button
                  className="btn btn__primary primary-linear-background"
                  type="submit"
                  ref={newsletterBtn}
                >
                  Join our newsletter
                </button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </div>
      <Theme />
    </div>
  );
};

export default Herobox;
