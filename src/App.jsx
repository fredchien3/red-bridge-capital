import { ParallaxProvider } from "react-scroll-parallax"
import Lottie from "lottie-react"
import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import IntroSection from "./components/IntroSection/IntroSection"
import introAnimation from "./assets/rb_logo_animation.json"
import { useEffect, useRef, useState } from "react"

function App() {

  return (
    <ParallaxProvider>
      <div className="w-full h-screen font-ss">
        <AnimationComponent />
        <IntroSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </div>
    </ParallaxProvider>
  )
}

const AnimationComponent = () => {
  const lottieRef = useRef();
  const [animationState, setAnimationState] = useState(0);
  
  useEffect(() => {
    lottieRef.current.setSpeed(1.3);
    setTimeout(() => {
      setAnimationState(1);
      document.body.classList.remove("noscroll");
    }, 5500);
    setTimeout(() => {
      setAnimationState(2);
    }, 6500);
  }, [])

  let animationClass = '';
  switch (animationState) {
    case 0:
      animationClass = 'bg-white';
      break;
    case 1:
      animationClass = 'bg-transparent';
      break;
    case 2:
      animationClass = 'hidden';
      break;
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={introAnimation}
      loop={false}
      className={`w-full h-screen fixed z-20 transition duration-1000 noscroll
      ${animationClass}`}
    />
  );
};


export default App
