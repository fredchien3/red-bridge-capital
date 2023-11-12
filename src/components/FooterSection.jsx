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
      <section className="w-full h-72 sm:h-96 md:h-[95vh] relative flex z-10">
        <ParallaxBanner 
          layers={[{ image: city, speed: -15 }]}
          className="h-full"
        />
      </section>
      <footer className="w-full h-auto lg:h-2/5 flex flex-col justify-between p-[6vw] 2xl:pb-[18vw] bg-jade text-beige
      text-[2.7vw] sm:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw]">
        <div className="flex justify-end">
            <div className="flex items-center" onClick={scrollUp}>
              <p className="mr-4">Back to top</p>
              <img src={arrowUp} className="floating-arrow h-6 md:h-11" />
            </div>
        </div>
        <div className="flex justify-between items-end pb-4 md:pb-7 mt-12 md:mt-24">
          <aside className="flex justify-between flex-col-reverse h-[30vw] lg:h-auto lg:flex-row items-start lg:items-end">
            <img src={footerLogo} alt="Red Bridge Capital logo" className="h-[16vw] md:h-[8vw] object-contain -mb-2 md:-mb-7 lg:mr-[8vw] 2xl:mr-[12vw]" />
            <a
              href="#"
              target="_blank"
              className="leading-none hover:text-maroon duration-300"
            >
              190 Eigin Avenue, George Town, Grand Cayman KY1-9008, Cayman Islands
            </a>
          </aside>
          <aside className="flex justify-between flex-col h-[30vw] lg:h-auto lg:flex-row items-end">
            <ul className="text-right lg:text-left leading-none lg:mr-[8vw] 2xl:mr-[12vw]">
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
            <p>Copyright © 2023 Red Bridge Capital</p>
          </aside>
        </div>
      </footer>
    </>
  )
}