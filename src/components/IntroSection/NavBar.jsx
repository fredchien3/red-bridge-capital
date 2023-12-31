import { useContext, useEffect, useState } from "react";
import headerLogo from '../../assets/icons/header_logo.png';
import headerLogoBeige from '../../assets/icons/header_logo_beige.png';
import { LanguageContext } from "../../App";
import navPlus from '../../assets/icons/nav_plus.png';
import navMinus from '../../assets/icons/nav_minus.png';
import Clock from "./Clock";

const displayText = {
  about: {
    0: "About",
    1: "关于",
    2: "關於"
  },
  contact: {
    0: "Contact",
    1: "联系",
    2: "聯繫"
  },
  language: {
    0: "EN",
    1: "简",
    2: "繁"
  }
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
};

export default function NavBar() {
  const [ hoverLogo, setHoverLogo ] = useState(false);
  const [ bigmode, setBigmode ] = useState(window.matchMedia("(min-width: 640px)").matches);
  const [ menu, setMenu ] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 640px)")
      .addEventListener('change', e => setBigmode( e.matches ));
  }, []);

  function toggleMenu() {
    window.scrollTo(0, 0);
    setMenu(m => !m);
  }

  const showMenu = menu && !bigmode;

  return (
    <nav
      id="nav"
      className={`absolute flex flex-col top-0 w-full z-30
      transition-all duration-300 ease-in-out ${showMenu ? 'bg-maroon h-screen !fixed' : 'h-20'}`}
    >
      <div
        id="nav-top-bar"
        className="w-full flex justify-between p-[5vw] md:p-[2vw]"
      >
        <div
          className="relative h-6 sm:h-8 md:h-10 cursor-pointer"
          onMouseLeave={() => setHoverLogo(false)}
          onMouseEnter={() => setHoverLogo(true)}
        >
          <img
            src={showMenu ? headerLogoBeige : headerLogo}
            alt="Red Bridge Capital logo"
            className="h-6 sm:h-8 md:h-10"
          />
          <img
            src={showMenu ? headerLogo : headerLogoBeige}
            alt="Beige Red Bridge Capital logo"
            className="h-6 sm:h-8 md:h-10 absolute top-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: hoverLogo ? 1 : 0 }}
          />
        </div>
        {bigmode && <BigModeLinks />}
        {!bigmode && <SmallModeToggle
          showMenu={showMenu}
          toggleMenu={toggleMenu}
        />}
      </div>
      {!bigmode && <SmallModeMenu
        showMenu={showMenu}
        setMenu={setMenu}
      />}
    </nav>
  )
}

function BigModeLinks () {
  const { language, isChangingLanguage, cycleLanguage } = useContext(LanguageContext);

  return (
    <div
      className="flex justify-between w-2/5 xl:w-1/5 text-maroon"
    >
      <button
        className={`hover:text-beige duration-300 uppercase
        ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => scrollToSection("about-section")}
      >
        {displayText['about'][language]}
      </button>
      <button
        className={`hover:text-beige duration-300 uppercase
        ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => scrollToSection("contact-section")}
      >
        {displayText['contact'][language]}
      </button>
      <button
        className={`hover:text-beige duration-300 uppercase
        ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        onClick={cycleLanguage}
      >
        {displayText['language'][language]}
      </button>
    </div>
  )
}

function SmallModeToggle ({ showMenu, toggleMenu }) {

  return (
    <div
      className="h-10 relative cursor-pointer"
      onClick={toggleMenu}
    >
    <img src={navPlus}
      className="h-10 transition-opacity duration-300 ease-in-out"
      style={{ opacity: showMenu ? 0 : 1 }}
    />
    <img src={navMinus}
      className="h-10 absolute top-0 transition-opacity duration-300 ease-in-out"
      style={{ opacity: showMenu ? 1 : 0 }}
    />
  </div>)
}

function SmallModeMenu ({ showMenu, setMenu }) {
  const { language, isChangingLanguage, cycleLanguage } = useContext(LanguageContext);

  return (
    <div
      className="flex flex-col justify-center p-8 transition-opacity duration-300 ease-in-out h-[90%]"
      style={{ opacity: showMenu ? 1 : 0, visibility: showMenu ? "visible" : "hidden" }}
    >
      <div
        className={`text-6xl text-beige cursor-pointer mb-16
        hover:text-black duration-300 uppercase
        ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => {
          scrollToSection("about-section");
          setMenu(false);
        }}
      >
        {displayText['about'][language]}
      </div>
      <div
        className={`text-6xl text-beige cursor-pointer mb-16
        hover:text-black duration-300 uppercase
        ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => {
          scrollToSection("contact-section");
          setMenu(false);
        }}
      >
        {displayText['contact'][language]}
      </div>
      <div
        className={`text-6xl text-beige cursor-pointer mb-16
        hover:text-black duration-300 uppercase
        ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        onClick={cycleLanguage}
      >
        {displayText['language'][language]}
      </div>
      <Clock className="text-4xl text-beige" />
    </div>
  )
}