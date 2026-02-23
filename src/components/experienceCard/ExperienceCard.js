import React, {useState, createRef} from "react";
import {motion} from "framer-motion";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const bannerBackground = cardInfo.companyBannerColor || rgb(colorArrays);

  return (
    <motion.div
      className={`${isDark ? "experience-card-dark" : "experience-card"} group cursor-pointer`}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: {type: "spring", stiffness: 260, damping: 18}
      }}
    >
      <div style={{background: bannerBackground}} className="experience-banner relative overflow-hidden">
        <div className="experience-blurred_div"></div>
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg group-hover:scale-110 transition-transform duration-300"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
        <div className="experience-div-company">
          <h5 className="experience-text-company group-hover:scale-105 transition-transform duration-300">{cardInfo.company}</h5>
        </div>
      </div>
      <div className="experience-text-details group-hover:bg-base-200/50 transition-colors duration-300 rounded-b-lg">
        <h5 className="experience-text-role group-hover:text-primary transition-colors">
          {cardInfo.role}
        </h5>
        <h5 className="experience-text-date">
          {cardInfo.date}
        </h5>
        <p className="subTitle experience-text-desc">
          {cardInfo.desc}
        </p>
      </div>
    </motion.div>
  );
}
