import React from "react";
import SocialIconLine from "./SocialIconLine";

const Contact = () => {
  return (
    <footer className="my-0 pt-1" id="contact-me-section">
      <div className="container-fluid bg-dark p-3">
        <div className="text-white text-center align-self-center my-3">
          <h2>Let's Connect</h2>
          <p>Send me an email and let's chat. I'll buy the coffee.</p>
          <SocialIconLine color="white" />
          <div className="row justify-content-sm-center">
            <div className="col-1"></div>

            <div className="col-auto">
              <p className="lead">
                <a href="mailto:rrsalerno21@gmail.com" className="">
                  rrsalerno21@gmail.com
                </a>
              </p>
              <br />
            </div>

            <div className="col-auto">
              <p className="lead">
                <a href="tel:+18315210205" className="">
                  (831) 521-0205
                </a>
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
