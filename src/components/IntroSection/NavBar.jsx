import { useState } from "react";
import headerLogo from '../../assets/icons/header_logo.png';
import headerLogoBeige from '../../assets/icons/header_logo_beige.png';

export default function NavBar() {
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
      <div className="flex justify-between w-1/5 text-maroon ">
        <button
          className="hover:text-beige duration-300"
          onClick={() => scrollTo("about-section")}
        >
          关于
        </button>
        <button
          className="hover:text-beige duration-300"
          onClick={() => scrollTo("contact-section")}
        >
          联系
        </button>
        <button
          className="hover:text-beige duration-300"
        >
          En
        </button>
      </div>
    </nav>
  )
}