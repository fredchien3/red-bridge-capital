import Lottie from "lottie-react"
import introAnimation from "../assets/rb_logo_animation.json"
import { useEffect, useRef, useState } from "react"


export default function IntroAnimation() {
  const lottieRef = useRef();
  const [animationState, setAnimationState] = useState(0);
  
  useEffect(() => {
    document.body.classList.add("noscroll");
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