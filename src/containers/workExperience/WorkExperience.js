import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience" className="py-12 sm:py-16 lg:py-20 bg-base-100">
        <div className="experience-container" id="workExperience">
          <motion.h1
            className="experience-heading text-base-content"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-50px"}}
            transition={{duration: 0.5}}
          >
            Experiences
          </motion.h1>
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-30px"}}
                transition={{duration: 0.4, delay: i * 0.1}}
              >
                <ExperienceCard
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    companyBannerColor: card.companyBannerColor,
                    role: card.role,
                    descBullets: card.descBullets
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
