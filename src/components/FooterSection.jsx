import city from "../assets/images/city.jpg";
import footerLogo from '../assets/icons/footer_logo.png';

export default function FooterSection() {
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
        <div className="flex justify-end">Back to top /\</div>
        <div className="flex justify-between items-end pb-7">
          <img src={footerLogo} alt="Red Bridge Capital logo" className="h-40 -mb-7" />
          <ul className="leading-none">
            <li>Head Office</li>
            <li>1500 – 1021</li>
            <li>W Broadway St, Hong Kong</li>
          </ul>
          <ul className="leading-none">
            <li>Contact</li>
            <li>+(852) 5505 8831</li>
            <li>contact@redbridgecapital.com</li>
          </ul>
          <p>Copyright © 2023 Red Bridge Capital</p>
        </div>
      </footer>
    </>
  )
}