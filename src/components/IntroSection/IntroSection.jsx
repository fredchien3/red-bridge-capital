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
    heroText = <>
      BASED IN HONG KONG,<br/>
      OUR GLOBAL EXPANSION STEMS<br/>
      FROM DEEP ROOTS IN CHINA.
    </>
  }

  const scrollDown = () => {
    document.getElementById("about-section").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="w-full h-4/5 flex justify-center items-center relative">
        <NavBar toggleLanguage={toggleLanguage}/>
        <ParallaxBanner
          layers={[{ image: wall, speed: -15 }]}
          className="w-full h-full absolute object-cover"
        >
          <h1 className={`absolute left-16 bottom-16 text-8xl uppercase text-white duration-500 ease-in-out
          ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
            {heroText}
          </h1>
        </ParallaxBanner>
      </header>
      <section className="flex justify-between h-1/2 text-2xl">
        <aside className="flex flex-col justify-between w-1/2 h-full p-14 pr-16 bg-maroon text-white z-10">
          <div className="flex justify-between items-end w-full">
            <a
              href="#"
              target="_blank"
              className="leading-none hover:text-black duration-300"
            >
              Head Office<br />
              1500 – 1021<br />
              W Broadway St, Hong Kong
            </a>
            <Clock />
          </div>
          <div className="flex justify-end items-end w-full relative">
            <img src={arrowDown} className="floating-arrow" onClick={scrollDown} />
          </div>
        </aside>
        <aside className="flex justify-end w-1/2 h-full p-14 bg-beige z-10">
          <ul className="leading-none text-right">
            <li>Contact</li>
            <li>
              <a href="tel:+85255058831"
                target="_blank"
                className="hover:text-maroon duration-300"
              >
                +(852) 5505 8831
              </a>
            </li>
            <li>
              <a href="mailto:contact@redbridgecapital.com"
                target="_blank"
                className="hover:text-maroon duration-300"
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