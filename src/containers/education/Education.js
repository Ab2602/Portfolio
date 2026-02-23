import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="py-12 sm:py-16 lg:py-20 bg-base-100" id="education">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-base-content">Education</h1>
          <div className="flex flex-col gap-6 sm:gap-8">
            {educationInfo.schools.map((school, index) => (
              <div key={index}>
                <EducationCard school={school} />
                {index < educationInfo.schools.length - 1 && (
                  <div className="w-full border-t border-base-300 my-4 sm:my-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
