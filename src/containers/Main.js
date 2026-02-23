import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    // Update daisyUI theme immediately
    const html = document.documentElement;
    html.setAttribute('data-theme', newIsDark ? 'dark' : 'retro');
  };

  // Update theme when isDark changes or on mount
  useEffect(() => {
    const html = document.documentElement;
    const theme = isDark ? 'dark' : 'retro';
    html.setAttribute('data-theme', theme);
    // Also set on body for compatibility
    document.body.setAttribute('data-theme', theme);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-base-100" data-theme={isDark ? "dark" : "retro"}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            {/* <Achievement /> */}
            <Blogs />
            {/* <Talks /> */}
            {/* <Twitter />
            <Podcast /> */}
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
