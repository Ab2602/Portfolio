import React, { useContext } from "react";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const techColors = {
  aws: { 
    bg: 'rgba(255, 153, 0, 0.2)', 
    border: 'rgba(255, 153, 0, 0.5)', 
    text: '#FF9900', 
    icon: '#FF9900',
    darkText: '#FFB84D',
    darkIcon: '#FFB84D'
  },
  docker: { 
    bg: 'rgba(13, 183, 230, 0.2)', 
    border: 'rgba(13, 183, 230, 0.5)', 
    text: '#0DB7E6', 
    icon: '#0DB7E6',
    darkText: '#4DC8F0',
    darkIcon: '#4DC8F0'
  },
  kubernetes: { 
    bg: 'rgba(50, 106, 220, 0.2)', 
    border: 'rgba(50, 106, 220, 0.5)', 
    text: '#326ADA', 
    icon: '#326ADA',
    darkText: '#5B8AE8',
    darkIcon: '#5B8AE8'
  },
  linux: { 
    bg: 'rgba(0, 154, 68, 0.2)', 
    border: 'rgba(0, 154, 68, 0.5)', 
    text: '#009A44', 
    icon: '#009A44',
    darkText: '#00C85A',
    darkIcon: '#00C85A'
  },
  python: { 
    bg: 'rgba(48, 105, 152, 0.2)', 
    border: 'rgba(48, 105, 152, 0.5)', 
    text: '#306998', 
    icon: '#306998',
    darkText: '#4A9FD4',
    darkIcon: '#4A9FD4'
  },
  git: { 
    bg: 'rgba(240, 81, 51, 0.2)', 
    border: 'rgba(240, 81, 51, 0.5)', 
    text: '#F05133', 
    icon: '#F05133',
    darkText: '#FF6B4D',
    darkIcon: '#FF6B4D'
  },
  jenkins: { 
    bg: 'rgba(208, 215, 222, 0.25)', 
    border: 'rgba(208, 215, 222, 0.6)', 
    text: '#4A5568', 
    icon: '#4A5568',
    darkText: '#E2E8F0',
    darkIcon: '#E2E8F0'
  },
  terraform: { 
    bg: 'rgba(92, 107, 192, 0.2)', 
    border: 'rgba(92, 107, 192, 0.5)', 
    text: '#5C6BC0', 
    icon: '#5C6BC0',
    darkText: '#7C8FE0',
    darkIcon: '#7C8FE0'
  },
  bash: { 
    bg: 'rgba(66, 66, 66, 0.2)', 
    border: 'rgba(66, 66, 66, 0.5)', 
    text: '#424242', 
    icon: '#424242',
    darkText: '#E0E0E0',
    darkIcon: '#E0E0E0'
  },
  go: { 
    bg: 'rgba(0, 173, 216, 0.2)', 
    border: 'rgba(0, 173, 216, 0.5)', 
    text: '#00ADD8', 
    icon: '#00ADD8',
    darkText: '#00D4FF',
    darkIcon: '#00D4FF'
  },
  prometheus: { 
    bg: 'rgba(255, 26, 0, 0.2)', 
    border: 'rgba(255, 26, 0, 0.5)', 
    text: '#FF1A00', 
    icon: '#FF1A00',
    darkText: '#FF4D33',
    darkIcon: '#FF4D33'
  },
  grafana: { 
    bg: 'rgba(255, 108, 0, 0.2)', 
    border: 'rgba(255, 108, 0, 0.5)', 
    text: '#FF6C00', 
    icon: '#FF6C00',
    darkText: '#FF8C33',
    darkIcon: '#FF8C33'
  }
};

const getTechColor = (skillName, isDark) => {
  const key = skillName.toLowerCase();
  const colors = techColors[key] || { 
    bg: 'rgba(100, 116, 139, 0.2)', 
    border: 'rgba(100, 116, 139, 0.5)', 
    text: '#64748b', 
    icon: '#64748b',
    darkText: '#94A3B8',
    darkIcon: '#94A3B8'
  };
  
  return {
    ...colors,
    text: isDark ? (colors.darkText || colors.text) : colors.text,
    icon: isDark ? (colors.darkIcon || colors.icon) : colors.icon
  };
};

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);
  
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
      {skillsSection.softwareSkills.map((skill, i) => {
        const colors = getTechColor(skill.skillName, isDark);
        return (
          <div
            key={i}
            className="group relative"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <div
              className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl border-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
              style={{
                backgroundColor: colors.bg,
                borderColor: colors.border,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
              }}
            >
              <i 
                className={`${skill.fontAwesomeClassname} text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-125`}
                style={{ color: colors.icon }}
              ></i>
              <p 
                className="text-[10px] sm:text-xs lg:text-sm font-medium text-center px-1 sm:px-2 leading-tight"
                style={{ color: colors.text }}
              >
                {capitalizeFirst(skill.skillName)}
              </p>
            </div>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${colors.bg} 0%, transparent 50%)`,
                backdropFilter: 'blur(5px)',
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
