import { useContext, useState } from "react";
import headerLogo from '../../assets/icons/header_logo.png';
import headerLogoBeige from '../../assets/icons/header_logo_beige.png';
import { LanguageContext } from "../../App";

export default function NavBar({ toggleLanguage }) {
  const language = useContext(LanguageContext);
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id="nav" className="absolute w-full flex justify-between p-10 top-0 z-10">
      <div
        className="relative h-10 hover:cursor-pointer"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <img
          src={headerLogo}
          alt="Red Bridge Capital logo"
          className="h-10"
        />
        <img
          src={headerLogoBeige}
          alt="Beige Red Bridge Capital logo"
          className="h-10 absolute top-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
      <div className="flex justify-between w-1/5 text-maroon">
        <button
          className="hover:text-beige duration-300 uppercase"
          onClick={() => scrollTo("about-section")}
        >
          {language == 0 ? "关于" : "About"}
        </button>
        <button
          className="hover:text-beige duration-300 uppercase"
          onClick={() => scrollTo("contact-section")}
        >
          
          {language == 0 ? "联系" : "Contact"}
        </button>
        <button
          className="hover:text-beige duration-300 uppercase"
          onClick={toggleLanguage}
        >
          {language == 0 ? "EN" : "中文"}
        </button>
      </div>
    </nav>
  )
}