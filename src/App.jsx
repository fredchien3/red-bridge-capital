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
  // 0 - Chinese
  // 1 - English

  useEffect(() => {
    sessionStorage.setItem("visited", "true");
  }, [])

  function toggleLanguage() {
    const prevLanguage = language;
    const nextLanguage = prevLanguage === 0 ? 1 : 0;
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  }
  
  return (
    <ParallaxProvider>
      <LanguageContext.Provider value={language}>
        <div className="w-full h-screen font-ss">
          { sessionStorage.getItem("visited") === "true" ? <></> : <IntroAnimation />}
          <IntroSection toggleLanguage={toggleLanguage}/>
          <AboutSection />
          <ContactSection />
          <FooterSection />
        </div>
      </LanguageContext.Provider>
    </ParallaxProvider>
  )
}

export default App
