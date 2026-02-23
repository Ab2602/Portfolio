import React, {createRef} from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div className="w-full group">
      <Fade left duration={1000}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full hover:bg-base-200/50 rounded-xl p-3 sm:p-4 transition-all duration-300 cursor-pointer">
          {school.logo && (
            <div className="flex-shrink-0">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="flex-1 w-full min-w-0 text-center sm:text-left">
            <h5 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-base-content">{school.schoolName}</h5>
            <div className="space-y-1 sm:space-y-2">
              <h5 className="text-base sm:text-lg font-semibold text-base-content">
                {school.subHeader}
              </h5>
              <p className="text-sm sm:text-base text-base-content/80">
                {school.duration}
              </p>
              <p className="text-sm sm:text-base text-base-content/70">{school.desc}</p>
              {school.descBullets && school.descBullets.length > 0 && (
                <div className="education-text-bullets text-left">
                  <ul>
                    <GetDescBullets descBullets={school.descBullets} />
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
