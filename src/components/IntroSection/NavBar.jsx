import { useContext, useEffect, useState } from "react";
import headerLogo from '../../assets/icons/header_logo.png';
import headerLogoBeige from '../../assets/icons/header_logo_beige.png';
import { LanguageContext } from "../../App";
import navPlus from '../../assets/icons/nav_plus.png';

export default function NavBar({ toggleLanguage }) {
  const { language, isChangingLanguage } = useContext(LanguageContext);
  const [ isHovered, setIsHovered ] = useState(false);
  const [ matches, setMatches ] = useState(window.matchMedia("(min-width: 640px)").matches);
  const [ menu, setMenu ] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 640px)") // matches: greater than sm
      .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav id="nav" className="absolute w-full flex justify-between p-[5vw] md:p-[2vw] top-0 z-20">
      <div
        className="relative h-6 sm:h-8 md:h-10 hover:cursor-pointer"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <img
          src={headerLogo}
          alt="Red Bridge Capital logo"
          className="h-6 sm:h-8 md:h-10"
        />
        <img
          src={headerLogoBeige}
          alt="Beige Red Bridge Capital logo"
          className="h-6 sm:h-8 md:h-10 absolute top-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
      {matches && <div className="flex justify-between w-2/5 xl:w-1/5 text-maroon">
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
      {!matches && <div>
        <img src={navPlus} className="h-10 cursor-pointer" />
      </div>}
    </nav>
  )
}