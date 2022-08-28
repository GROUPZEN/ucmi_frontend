import React from "react";

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
      <div className="footer__socialmedia"> social media icons</div>
      <div className="footer__copyright body-heading">
        2022 &copy; Copyright. All rights resevered.
      </div>
    </footer>
  );
};

export default Footer;
