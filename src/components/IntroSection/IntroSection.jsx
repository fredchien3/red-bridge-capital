import wall from "../../assets/images/wall.jpg";
import Clock from "./Clock";
import NavBar from "./NavBar";
import arrowDown from "../../assets/icons/arrow_down.png"
import { ParallaxBanner } from "react-scroll-parallax";
import { useContext } from "react";
import { LanguageContext } from "../../App";

const displayText = {
  hero: {
    0: "Based in Hong Kong,\nour global expansion\nstems from deep roots in China.",
    1: "立足香港 , 背靠岭南 , 眼向世界",
    2: "立足香港 , 背靠嶺南 , 眼向世界"
  },
  hongKongLabel: {
    0: "Hong Kong Office",
    1: "香港办公室",
    2: "香港辦公室"
  },
  hongKongAddress: {
    0: "Suites 1901,\nLevel 19, Cheung Kong Center,\n2 Queen’s Road Central, Central, Hong Kong",
    1: "香港中环皇后大道中2号长江集团中心19楼1901室",
    2: "香港中環皇后大道中2號長江集團中心19樓1901室"
  },
  caymanLabel: {
    0: "Cayman Office",
    1: "开曼群岛办公",
    2: "開曼群島辦公"
  },
  caymanAddress: {
    0: "190 Elgin Avenue, George Town,\nGrand Cayman KY1-9008, Cayman Islands",
    1: "190 Elgin Avenue, George Town,\nGrand Cayman KY1-9008, Cayman Islands",
    2: "190 Elgin Avenue, George Town,\nGrand Cayman KY1-9008, Cayman Islands"
  },
  contact: {
    0: "Contact",
    1: "联系",
    2: "聯繫"
  }
}

export default function IntroSection() {
  const { language, isChangingLanguage } = useContext(LanguageContext);

  const scrollDown = () => {
    document.getElementById("about-section").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="w-full h-[70%] flex justify-center items-center relative">
        <NavBar />
        <ParallaxBanner
          layers={[{ image: wall, speed: -15 }]}
          className="w-full h-full absolute object-cover z-10"
        >
          <h1 className={`absolute uppercase text-white transition-opacity duration-300 ease-in-out
          text-[5vw] left-[3vw] bottom-[3vw] leading-none whitespace-pre-wrap
          ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
            {displayText["hero"][language]}
          </h1>
        </ParallaxBanner>
      </header>
      <section className="flex justify-between h-72 md:h-80 xl:h-[24rem] 2xl:h-[28rem] text-sm md:text-base xl:text-xl 2xl:text-2xl">
        <aside className="flex flex-col justify-between w-1/2 h-full p-[4vw] xl:p-[3vw] bg-maroon text-white z-20">
          <div className="relative flex flex-col justify-between items-start h-full w-full
          2xl:flex-row 2xl:h-auto 2xl:items-end">
            <div className="flex flex-col">
              <p className={`duration-300 whitespace-pre-wrap ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
                {displayText["hongKongLabel"][language]}
              </p>
              <a
                href="https://maps.app.goo.gl/W4WV5XatwFXKbLQ29"
                target="_blank"
                className={`leading-tight hover:text-black duration-300 whitespace-pre-wrap ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
              >
                {displayText["hongKongAddress"][language]}
              </a>
              <br />
              <p className={`duration-300 whitespace-pre-wrap ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
                {displayText["caymanLabel"][language]}
              </p>
              <a
                href="https://maps.app.goo.gl/V8BcTVr5KPZyvFyFA"
                target="_blank"
                className={`leading-tight hover:text-black duration-300 whitespace-pre-wrap ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
              >
                {displayText["caymanAddress"][language]}
              </a>
            </div>
            <Clock className="absolute text-left bottom-[-2.1rem] 2xl:-bottom-2 text-4xl 2xl:relative 2xl:text-[1.5vw] 2xl:w-[6vw]" />
          </div>
          <div className="flex justify-end items-end w-full relative 2xl:mt-8">
            <img src={arrowDown} className="floating-arrow h-7 sm:h-11" onClick={scrollDown} />
          </div>
        </aside>
        <aside className="flex justify-end w-1/2 h-full p-[4vw] xl:p-[3vw] bg-beige z-20">
          <ul className="leading-none text-right">
            <li className={`duration-300 ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
              {displayText["contact"][language]}
            </li>
            <li>
              <a href="tel:+85234695185"
                target="_blank"
                className="hover:text-maroon transition-colors duration-300"
              >
                +(852) 3469 5185
              </a>
            </li>
            <li>
              <a href="mailto:admin@redbridgecapital.com"
                target="_blank"
                className="hover:text-maroon transition-colors duration-300"
              >
                admin@redbridgecapital.com
                </a>
            </li>
          </ul>
        </aside>
      </section>
    </>
  )
}