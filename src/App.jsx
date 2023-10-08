import { ParallaxProvider } from "react-scroll-parallax"
import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import IntroSection from "./components/IntroSection/IntroSection"
import IntroAnimation from "./components/IntroAnimation"
import { createContext, useState } from "react"

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState(0);
  // 0 - Chinese
  // 1 - English

  function toggleLanguage() {
    setLanguage(prevLanguage => !prevLanguage);
  }
  
  return (
    <ParallaxProvider>
      <LanguageContext.Provider value={language}>
        <div className="w-full h-screen font-ss">
          <IntroAnimation />
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
