import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import IntroSection from "./components/IntroSection"

function App() {

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden font-ss" style={{ perspective: '15px' }}>
      <IntroSection />
      <AboutSection />
      <ContactSection />
      <footer className="bg-white w-full h-[1000px]">
        foot
      </footer>
    </div>
  )
}

export default App
