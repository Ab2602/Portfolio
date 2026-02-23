import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="flex gap-2 sm:gap-3 flex-wrap">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <i className="fas fa-envelope text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab"
        >
          <i className="fab fa-gitlab text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <i className="fab fa-medium text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stack Overflow"
        >
          <i className="fab fa-stack-overflow text-lg sm:text-xl"></i>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="btn btn-circle btn-sm sm:btn-md btn-primary hover:scale-110 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaggle"
        >
          <i className="fab fa-kaggle text-lg sm:text-xl"></i>
        </a>
      ) : null}
    </div>
  );
}
