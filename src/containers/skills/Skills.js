import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-base-100" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade bottom duration={1000}>
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-base-content">
              {skillsSection.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-base-content/70 max-w-3xl mx-auto px-2">
              {skillsSection.subTitle}
            </p>
          </div>
        </Fade>
        
        <Fade bottom duration={1000} delay={200}>
          <div className="mb-6 sm:mb-8">
            <SoftwareSkill />
          </div>
        </Fade>

        <Fade bottom duration={1000} delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {skillsSection.skills.map((skill, i) => {
              const skillText = typeof skill === 'string' ? skill : String(skill);
              
              return (
                <div
                  key={i}
                  className="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] cursor-pointer group border-2 border-transparent hover:border-primary/30"
                >
                  <div className="flex items-start gap-3 p-4 sm:p-6">
                    <span className="text-lg sm:text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" style={{ lineHeight: '1.5' }}>⚡</span>
                    <p className="text-sm sm:text-base text-base-content leading-relaxed flex-1 m-0 group-hover:text-primary transition-colors">
                      {skillText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}
