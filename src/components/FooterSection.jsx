import city from "../assets/images/city.jpg";
import footerLogo from '../assets/icons/footer_logo.png';
import arrowUp from "../assets/icons/arrow_up.png"

export default function FooterSection() {
  const scrollUp = () => {
    document.getElementById("nav").scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <section className="w-full h-[110vh] relative flex -z-10" style={{ transformStyle: 'preserve-3d' }}>
        <div
          className="w-full h-full object-cover -z-10"
          style={{ backgroundImage: `url(${city})`, backgroundPosition: '75% 80%',
          backgroundSize: 'cover', transform: 'translateZ(-8px) scale(1.6)'}}>
        </div>
      </section>
      <footer className="w-full h-2/5 flex flex-col justify-between px-14 py-16 bg-jade text-beige text-xl">
        <div className="flex justify-end">
            <div className="flex items-center" onClick={scrollUp}>
              <p className="mr-4">Back to top</p>
              <img src={arrowUp} className="floating-arrow" />
            </div>
        </div>
        <div className="flex justify-between items-end pb-7">
          <img src={footerLogo} alt="Red Bridge Capital logo" className="h-40 -mb-7" />
          <a
            href="#"
            target="_blank"
            className="leading-none hover:text-maroon duration-300"
          >
            Head Office<br />
            1500 – 1021<br />
            W Broadway St, Hong Kong
          </a>
          <ul className="leading-none">
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
          <p>Copyright © 2023 Red Bridge Capital</p>
        </div>
      </footer>
    </>
  )
}