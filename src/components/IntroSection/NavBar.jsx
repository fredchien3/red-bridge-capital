import { useContext, useEffect, useState } from "react";
import headerLogo from '../../assets/icons/header_logo.png';
import headerLogoBeige from '../../assets/icons/header_logo_beige.png';
import { LanguageContext } from "../../App";
import navPlus from '../../assets/icons/nav_plus.png';
import navMinus from '../../assets/icons/nav_minus.png';

export default function NavBar({ toggleLanguage }) {
  const { language, isChangingLanguage } = useContext(LanguageContext);
  const [ hoverLogo, setHoverLogo ] = useState(false);
  const [ bigmode, setBigmode ] = useState(window.matchMedia("(min-width: 640px)").matches);
  const [ hoverToggle, setHoverToggle ] = useState(false);
  const [ menu, setMenu ] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 640px)")
      .addEventListener('change', e => setBigmode( e.matches ));
  }, []);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  function toggleMenu() {
    window.scrollTo(0, 0);
    setMenu(m => !m);
  }

  const showMenu = menu && !bigmode;

  return (
    <nav id="nav"
      className={`absolute flex flex-col top-0 w-full z-30
      transition-all duration-300 ease-in-out ${showMenu ? 'bg-maroon h-screen !fixed' : 'h-20'}`}
    >
      <div
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
        {bigmode && <div
          className="flex justify-between w-2/5 xl:w-1/5 text-maroon"
        >
          <button
            className={`hover:text-beige duration-300 uppercase
            ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => scrollTo("about-section")}
          >
            {language === 0 ? "关于" : "About"}
          </button>
          <button
            className={`hover:text-beige duration-300 uppercase
            ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => scrollTo("contact-section")}
          >
            {language === 0 ? "联系" : "Contact"}
          </button>
          <button
            className={`hover:text-beige duration-300 uppercase
            ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
            onClick={toggleLanguage}
          >
            {language === 0 ? "EN" : "中文"}
          </button>
        </div>}
        {!bigmode && <div
            className="h-10 relative cursor-pointer"
            onMouseLeave={() => setHoverToggle(false)}
            onMouseEnter={() => setHoverToggle(true)}
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
        </div>}
      </div>
      {<div
        className="transition-opacity duration-200 ease-in-out bg-yellow-800"
        style={{ opacity: showMenu ? 1 : 0 }}
      >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam tempore temporibus in, praesentium cum nisi dolorum voluptatibus suscipit unde.
      </div>}
    </nav>
  )
}