import bridgeBeige from '../assets/icons/bridge_beige.png';

export default function ContactSection() {
  return (
    <section id="contact-section" className="w-full h-5/6 relative flex flex-col justify-between bg-slate text-beige p-14 z-10">
      <p className="w-1/3 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veritatis officiis in similique velit earum.
      </p>
      <div className="flex justify-between text-2xl">
        <a
          href="#"
          target="_blank"
          className="leading-none hover:text-maroon duration-300"
        >
          Head Office<br />
          1500 – 1021<br />
          W Broadway St, Hong Kong
        </a>
        <ul className="leading-none text-right">
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
      </div>
      <div className="flex justify-between items-end">
        <h1 className="font-ssm uppercase text-[5vw] leading-none z-20">Contact<br />Red Bridge</h1>
        <img src={bridgeBeige} alt="Bridge icon" className="h-8" />
      </div>
    </section>
  )
}