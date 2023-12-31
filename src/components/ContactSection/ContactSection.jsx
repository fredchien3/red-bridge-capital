import bridgeBeige from '../../assets/icons/bridge_beige.png';
import { useContext } from "react";
import { LanguageContext } from "../../App";
import displayText from "./displayText.json";
import headerFont from "../headerFont.json";

export default function ContactSection() {
  const { language, isChangingLanguage } = useContext(LanguageContext);

  return (
    <section id="contact-section" className="w-full h-72 sm:h-96 md:h-[33vw] relative flex flex-col justify-end bg-slate text-beige p-[6vw] md:p-[4vw] z-10">
      <div className="flex justify-between items-end">
        <h1 className={`font-header uppercase text-[12vw] md:text-[7vw] leading-none z-20 whitespace-pre-wrap
          ${headerFont[language]} duration-300 ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
          {displayText["contact"][language]}
        </h1>
        <img src={bridgeBeige} alt="Bridge icon" className="h-[5vw] md:h-8 mb-1" />
      </div>
    </section>
  )
}