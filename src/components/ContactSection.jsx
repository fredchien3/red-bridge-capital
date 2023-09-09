import bridgeBeige from '../assets/icons/bridge_beige.png';

export default function ContactSection() {
  return (
    <section id="contact-section" className="w-full h-5/6 relative flex flex-col justify-between bg-slate text-beige p-14 overflow-hidden">
      <p className="w-1/3 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veritatis officiis in similique velit earum.
      </p>
      <div className="flex justify-between text-2xl">
        <ul className="leading-none">
          <li>Head Office</li>
          <li>1500 – 1021</li>
          <li>W Broadway St, Hong Kong</li>
        </ul>
        <ul className="leading-none text-right">
          <li>Contact</li>
          <li>+(852) 5505 8831</li>
          <li>contact@redbridgecapital.com</li>
        </ul>
      </div>
      <div className="flex justify-between items-end">
        <h1 className="font-ssm uppercase text-8xl">Contact<br />Red Bridge</h1>
        <img src={bridgeBeige} alt="Bridge icon" className="h-8" />
      </div>
    </section>
  )
}