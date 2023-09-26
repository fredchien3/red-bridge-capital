import { ParallaxProvider } from "react-scroll-parallax"
import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import IntroSection from "./components/IntroSection/IntroSection"

function App() {

  return (
    <ParallaxProvider>
      <div className="w-full h-screen font-ss">
        <IntroSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </div>
    </ParallaxProvider>
  )
}

export default App
