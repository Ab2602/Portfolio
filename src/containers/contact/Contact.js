import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="contact-section py-12 sm:py-16 lg:py-20 bg-base-100 contact-margin-top" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-card bg-base-200/50 rounded-2xl shadow-xl overflow-hidden">
            <div className="contact-div-main">
              <div className="contact-header">
                <h1 className="contact-title text-base-content">
                  {contactInfo.title}
                </h1>
                <p className="contact-subtitle text-base-content/70">
                  {contactInfo.subtitle}
                </p>
                <div className="contact-text-div text-base-content">
                  {contactInfo.number && (
                    <p className="contact-detail-wrap">
                      <a
                        className="contact-detail"
                        href={"tel:" + contactInfo.number}
                      >
                        {contactInfo.number}
                      </a>
                    </p>
                  )}
                  <p className="contact-detail-wrap">
                    <a
                      className="contact-detail-email"
                      href={"mailto:" + contactInfo.email_address}
                    >
                      {contactInfo.email_address}
                    </a>
                  </p>
                  <div className="contact-social-wrap">
                    <SocialMedia />
                  </div>
                </div>
              </div>
              <div className="contact-image-div">
                {illustration.animated ? (
                  <DisplayLottie animationData={email} />
                ) : (
                  <img
                    alt="Contact"
                    src={require("../../assets/images/contactMailDark.svg")}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
