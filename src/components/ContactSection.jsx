import bridgeBeige from '../assets/icons/bridge_beige.png';

export default function ContactSection() {
  return (
    <section id="contact-section" className="w-full h-1/2 md:h-2/3 relative flex flex-col justify-end bg-slate text-beige p-[6vw] md:p-[4vw] z-10">
      <div className="flex justify-between items-end">
        <h1 className="font-ssm uppercase text-[10vw] md:text-[5vw] leading-none z-20">Contact<br />Red Bridge</h1>
        <img src={bridgeBeige} alt="Bridge icon" className="h-[5vw] md:h-8 mb-1" />
      </div>
    </section>
  )
}