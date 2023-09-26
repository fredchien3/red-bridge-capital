import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import IntroSection from "./components/IntroSection/IntroSection"

function App() {

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden font-ss" style={{ perspective: '15px' }}>
      <IntroSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
