import React, {useContext} from "react";
import {motion} from "framer-motion";
import emoji from "react-easy-emoji";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TerminalIntro from "../../components/terminal/TerminalIntro";
import TechStackMarquee from "../../components/techStackMarquee/TechStackMarquee";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.12, delayChildren: 0.15}
  }
};

const itemVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0}
};

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div
      className="greeting-section bg-gradient-to-br from-base-200 to-base-300 relative overflow-hidden"
      id="greeting"
      data-theme={isDark ? "dark" : "retro"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="flex-1 w-full lg:w-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-base-content"
              variants={itemVariants}
            >
              {greeting.title}{" "}
              <motion.span
                className="wave-emoji inline-block"
                animate={{y: [0, -8, 0]}}
                transition={{duration: 1.2, repeat: Infinity, ease: "easeInOut"}}
              >
                {emoji("👋")}
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-base-content/80 leading-relaxed"
              variants={itemVariants}
            >
              {greeting.subTitle}
            </motion.p>

            {greeting.showTerminal && (
              <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
                <TerminalIntro />
              </motion.div>
            )}

            <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
              <SocialMedia />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto shadow-lg"
                whileHover={{scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.15)"}}
                whileTap={{scale: 0.98}}
              >
                Contact me
              </motion.a>
              {greeting.resumeLink && (
                <motion.a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary btn-md sm:btn-lg w-full sm:w-auto hover:bg-primary hover:text-primary-content"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.98}}
                >
                  Download Resume
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-center"
            style={{maxWidth: "480px"}}
            initial={{opacity: 0, x: 40}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.3}}
          >
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
                className="w-full h-auto"
              />
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
        >
          <TechStackMarquee />
        </motion.div>
      </div>
    </div>
  );
}
