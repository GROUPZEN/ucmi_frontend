import React from "react";

import { ReactComponent as Facebook } from "../assets/svg/Facebook-icon.svg";
import { ReactComponent as Instagram } from "../assets/svg/Instagram-icon.svg";
import { ReactComponent as Youtube } from "../assets/svg/Youtube-icon.svg";
import Email from "../assets/svg/EmailIcon";
import { ReactComponent as WhatsApp } from "../assets/svg/Whatsapp-icon.svg";

const Footer = () => {
  return (
    <footer className="footer primary-linear-background">
      <div className="footer__message body-heading">
        We are glad and thank you for visiting us. <br /> We hope to see you in
        our premises soon. Feel free to give us a call
      </div>
      <div className="footer__name">
        <h1 className="stroke-heading">ucmi</h1>
      </div>
      <div className="footer__info">
        <div className="footer__info--location body-heading">
          greater-works assembly <br /> hansen avenue , adenta
        </div>
        <div className="footer__info--contact body-heading">
          call us +233244884488 <br /> +2332054775588
        </div>
      </div>
      <div className="footer__socialmedia">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web.facebook.com/groups/215346773125400"
          className="footer__socialmedia--icon"
        >
          <Facebook width="24px" height="24px" />
        </a>

        <a
          href="https://www.instagram.com/ucmi.ghana/"
          target="_blank"
          rel="noreferrer"
          className="footer__socialmedia--icon"
        >
          <Instagram width="24px" height="24px" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCMrp5wXdwz4_b2i0hlFewsQ"
          className="footer__socialmedia--icon"
        >
          <Youtube width="24px" height="24px" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:greaterworks.ucmi@gmail.com"
          className="footer__socialmedia--icon"
        >
          <Email color="white" width="24px" height="24px" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/grouplink"
          className="footer__socialmedia--icon"
        >
          <WhatsApp width="24px" height="24px" />
        </a>
      </div>
      <div className="footer__copyright body-heading">
        2022 &copy; Copyright. All rights resevered.
      </div>
    </footer>
  );
};

export default Footer;
