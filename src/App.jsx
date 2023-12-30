import { ParallaxProvider } from "react-scroll-parallax"
import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import IntroSection from "./components/IntroSection/IntroSection"
import IntroAnimation from "./components/IntroAnimation"
import { createContext, useEffect, useState } from "react"

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState(parseInt(localStorage.getItem("language")) || 0);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  // 0 - English
  // 1 - Simplified Chinese
  // 2 - Traditional Chinese

  useEffect(() => {
    sessionStorage.setItem("visited", "true");
  }, [])

  useEffect(() => {
    setIsChangingLanguage(false);
  }, [language]);

  function cycleLanguage() {
    const nextLanguage = (language + 1) % 3;
    setIsChangingLanguage(true);
    setTimeout(() => {
      setLanguage(nextLanguage);
      setIsChangingLanguage(false);
    }, 300);
    localStorage.setItem("language", nextLanguage);
  }

  return (
    <ParallaxProvider>
      <LanguageContext.Provider value={{language, isChangingLanguage, cycleLanguage}}>
        <div className="w-full h-screen font-ss">
          { sessionStorage.getItem("visited") === "true" ? <></> : <IntroAnimation />}
          <IntroSection />
          <AboutSection />
          <ContactSection />
          <FooterSection />
        </div>
      </LanguageContext.Provider>
    </ParallaxProvider>
  )
}

export default App
