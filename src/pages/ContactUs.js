import React, { useRef, useState } from "react";
import { sendFormData, sendNewsletter } from "../api";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

const ContactUs = () => {
  const newsletterBtn = useRef();
  const formBtn = useRef();
  const [newsletterStatus, setNewsletterStatus] = useState(false);

  const handleFormSubmit = (e) => {
    const formData = new FormData();
    e.preventDefault();

    formData.append("fullname", e.target.elements[0].value);
    formData.append("emailaddress", e.target.elements[1].value);
    formData.append("phonenumber", e.target.elements[2].value);
    formData.append("formtype", e.target.elements[3].value);
    formData.append("message", e.target.elements[4].value);

    sendFormData(formData)
      .then(() => {
        formBtn.current.innerHTML = "Form submitted";
        setTimeout(() => {
          formBtn.current.innerHTML = "Submit form";
        }, 2000);
      })
      .catch((err) => console.log(err.code, err.message));
  };

  const handleNewsletterSubmit = (e) => {
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
    <main>
      <NavMenu />
      <section className="section-background">
        <section className="pageheader">
          <figure className="pageheader__image--container pageheader__image--container-contact">
            <h4 className="pageheader__image--title secondary-heading">
              contact us
            </h4>
            <figcaption className="pageheader__image--description">
              Get to interact with us, join our newsletter, find us on your
              device using the map location and also feel free to reach out to
              us through our forms and we will call you right away.
            </figcaption>
          </figure>
        </section>
        <section className="contact__newsletter">
          <div className="contact__newsletter--text">
            <h4>
              We welcome you to our newsletter, join our mailing list and let us
              help you with your Christian life.
            </h4>
          </div>
          {newsletterStatus ? (
            <div className="contact__newsletter--confirm">
              <h5>
                Please check your email to comfirm subscription for our
                newsletter. Thank you!😊
              </h5>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="contact__newsletter--form"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="contact__newsletter--input"
                required
              />
              <button
                ref={newsletterBtn}
                type="submit"
                className="contact__newsletter--button"
              >
                Join our newsletter
              </button>
            </form>
          )}
        </section>
        <section className="contact__map">
          <iframe
            title="churchmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0620701284683!2d-0.14517978476901522!3d5.704173133726212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83a27404b709%3A0x923eeb2c015894ac!2sUnited%20Christian%20Ministries%20International%20-%20Greater-Works%20Assembly!5e0!3m2!1sen!2sgh!4v1662341122503!5m2!1sen!2sgh"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="contact__contact">
          <form onSubmit={handleFormSubmit} className="contact__form">
            <div className="contact__form--groups">
              <label htmlFor="fullName">full name</label>
              <input
                required
                type="text"
                name="fullName"
                id="fullname"
                placeholder="eg. John Doe"
              />
            </div>
            <div className="contact__form--groups">
              <label htmlFor="email">email address</label>
              <input
                required
                type="email"
                name="email"
                id="emailaddress"
                // pattern=".+@."
                placeholder="eg. johndoe@gmail.com"
              />
            </div>
            <div className="contact__form--groups">
              <label htmlFor="phone">phone number</label>
              <input
                required
                type="tel"
                pattern="[0-9]{10}"
                name="phone"
                id="phone"
                placeholder="eg. 03000000000"
              />
            </div>
            <div className="contact__form--groups">
              <label htmlFor="formType">form type</label>
              <select required name="formType" id="formType">
                <option>choose why you filling the form</option>
                <option value="enquires">enquires</option>
                <option value="appointment">appointment</option>
              </select>
            </div>
            <div className="contact__form--groups">
              <label htmlFor="message">additional message</label>
              <textarea
                placeholder="Type your message here."
                name="message"
                id="message"
                cols="20"
                rows="5"
              ></textarea>
            </div>
            <div className="contact__form--groups">
              <button
                ref={formBtn}
                type="submit"
                className="contact__newsletter--button"
              >
                Submit form
              </button>
            </div>
          </form>
          <div className="contact__form--message">
            <h4>
              You can also reach out to us for any information. We’ll be happy
              to hear from you. You can also book appointments with our leaders.
            </h4>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUs;
