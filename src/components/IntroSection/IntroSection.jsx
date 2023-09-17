import wall from "../../assets/images/wall.jpg";
import Clock from "./Clock";
import NavBar from "./NavBar";

export default function IntroSection() {  
  return (
    <>
      <header className="w-full h-4/5 relative flex justify-center items-center -z-10" style={{ transformStyle: 'preserve-3d' }}>
        <NavBar />
        <div
          className="w-full h-full absolute object-cover -z-10"
          style={{ backgroundImage: `url(${wall})`, backgroundPosition: '50% 50%',
          backgroundSize: 'cover', transform: 'translateZ(-5px) scale(1.5)'}}>
        </div>
        <h1 className="absolute left-16 bottom-16 text-8xl uppercase text-white">立足香港 . 背靠嶺南 . 眼向世界</h1>
      </header>
      <section className="flex justify-between h-1/2 text-2xl">
        <aside className="flex flex-col justify-between w-1/2 h-full p-14 pr-16 bg-maroon text-white">
          <div className="flex justify-between items-end w-full">
            <a href="#" className="leading-none hover:text-black duration-300">
              Head Office<br />
              1500 – 1021<br />
              W Broadway St, Hong Kong
            </a>
            <Clock />
          </div>
          <div className="flex justify-end items-end w-full">
            \/
          </div>
        </aside>
        <aside className="flex justify-end w-1/2 h-full p-14 bg-beige">
          <ul className="leading-none text-right">
            <li>Contact</li>
            <li>+(852) 5505 8831</li>
            <li>contact@redbridgecapital.com</li>
          </ul>
        </aside>
      </section>
    </>
  )
}