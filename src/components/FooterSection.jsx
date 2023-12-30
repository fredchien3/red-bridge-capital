import city from "../assets/images/city.jpg";
import footerLogo from '../assets/icons/footer_logo.png';
import arrowUp from "../assets/icons/arrow_up.png"
import { ParallaxBanner } from "react-scroll-parallax";

export default function FooterSection() {
  const scrollUp = () => {
    document.getElementById("nav").scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <section className="w-full h-96 md:h-[95vh] relative flex z-10">
        <ParallaxBanner 
          layers={[{ image: city, speed: -15 }]}
          className="h-full"
        />
      </section>
      <footer className="w-full h-auto flex flex-col justify-between p-[4vw] 2xl:pb-16 bg-jade text-beige
      text-sm sm:text-base md:text-2xl lg:text-2xl xl:text-xl 2xl:text-2xl">
        <div className="flex justify-end">
          <div className="flex items-center" onClick={scrollUp}>
            <p className="mr-4">Back to top</p>
            <img src={arrowUp} className="floating-arrow h-6 md:h-11" />
          </div>
        </div>
        <div className="flex justify-between items-end pb-4 md:pb-7 mt-12 md:mt-24">
          <aside className="flex justify-between flex-col-reverse h-[30vw] lg:h-[20vw] xl:h-auto xl:flex-row items-start xl:items-end">
            <img
              src={footerLogo}
              alt="Red Bridge Capital logo"
              className="h-[16vw] md:h-[8vw] object-contain -mb-2 mt-6 sm:mt-0 md:-mb-7 xl:mr-[8vw] 2xl:mr-[12vw]"
            />
            <a
              href="https://maps.app.goo.gl/V8BcTVr5KPZyvFyFA"
              target="_blank"
              className="leading-none hover:text-maroon duration-300 whitespace-pre-wrap"
            >
              {"190 Elgin Avenue,\nGeorge Town,Grand Cayman\nKY1-9008, Cayman Islands"}
            </a>
          </aside>
          <aside className="flex justify-between flex-col h-[30vw] lg:h-[20vw] xl:h-auto xl:flex-row items-end">
            <ul className="text-right xl:text-left leading-none xl:mr-[8vw] 2xl:mr-[12vw]">
              <li>Contact</li>
              <li>
                <a href="tel:+85234695185"
                  target="_blank"
                  className="hover:text-maroon duration-300"
                >
                  +(852) 3469 5185
                </a>
              </li>
              <li>
                <a href="mailto:admin@redbridgecapital.com"
                  target="_blank"
                  className="hover:text-maroon duration-300"
                >
                  admin@redbridgecapital.com
                  </a>
              </li>
            </ul>
            <p>Copyright © 2023<br />Red Bridge Capital</p>
          </aside>
        </div>
      </footer>
    </>
  )
}