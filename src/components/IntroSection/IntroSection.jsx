import wall from "../../assets/images/wall.jpg";
import Clock from "./Clock";
import NavBar from "./NavBar";
import arrowDown from "../../assets/icons/arrow_down.png"
import { ParallaxBanner } from "react-scroll-parallax";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export default function IntroSection({ toggleLanguage }) {
  const { language, isChangingLanguage } = useContext(LanguageContext);

  let heroText = "立足香港 . 背靠嶺南 . 眼向世界";

  if (language === 1) {
    heroText = "BASED IN HONG KONG, OUR GLOBAL EXPANSION STEMS FROM DEEP ROOTS IN CHINA.";
  }

  const scrollDown = () => {
    document.getElementById("about-section").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="w-full h-[70%] flex justify-center items-center relative">
        <NavBar toggleLanguage={toggleLanguage}/>
        <ParallaxBanner
          layers={[{ image: wall, speed: -15 }]}
          className="w-full h-full absolute object-cover z-10"
        >
          <h1 className={`absolute uppercase text-white transition-opacity duration-500 ease-in-out
          w-[60vw] text-[5vw] left-[3vw] bottom-[3vw] leading-none
          sm:w-[80vw]
          ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
            {heroText}
          </h1>
        </ParallaxBanner>
      </header>
      <section className="flex justify-between h-[28%] sm:h-1/2 text-[3vw] md:text-[2.5vw] xl:text-[1.5vw]">
        <aside className="flex flex-col justify-between w-1/2 h-full p-[4vw] bg-maroon text-white z-20">
          <div className="relative flex flex-col justify-between items-start h-full w-full
          md:flex-row md:h-auto md:items-end">
            <a
              href="#"
              target="_blank"
              className="leading-none hover:text-black transition-colors duration-300"
            >
              Head Office<br />
              1500 – 1021<br />
              W Broadway St, Hong Kong
            </a>
            <Clock className="text-4xl absolute bottom-[-2.1rem] md:relative md:text-[2.5vw] md:-bottom-2 xl:text-[1.5vw]" />
          </div>
          <div className="flex justify-end items-end w-full relative">
            <img src={arrowDown} className="floating-arrow h-8 md:h-11" onClick={scrollDown} />
          </div>
        </aside>
        <aside className="flex justify-end w-1/2 h-full p-[4vw] bg-beige z-20">
          <ul className="leading-none text-right">
            <li>Contact</li>
            <li>
              <a href="tel:+85255058831"
                target="_blank"
                className="hover:text-maroon transition-colors duration-300"
              >
                +(852) 5505 8831
              </a>
            </li>
            <li>
              <a href="mailto:contact@redbridgecapital.com"
                target="_blank"
                className="hover:text-maroon transition-colors duration-300"
              >
                contact@redbridgecapital.com
                </a>
            </li>
          </ul>
        </aside>
      </section>
    </>
  )
}