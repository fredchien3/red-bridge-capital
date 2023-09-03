import AboutSection from "./components/AboutSection"
import IntroSection from "./components/IntroSection"

function App() {

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden" style={{ perspective: '15px' }}>
      <IntroSection />
      <AboutSection />
      <footer className="bg-white w-full h-[1000px]">
        foot
      </footer>
    </div>
  )
}

export default App
