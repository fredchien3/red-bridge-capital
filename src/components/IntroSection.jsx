import wall from "../assets/images/wall.jpg";
import ifc from "../assets/images/ifc.jpg";

export default function IntroSection() {
  return (
    <>
      <header className="w-full h-2/3 relative flex justify-center items-center -z-10" style={{ transformStyle: 'preserve-3d' }}>
        <div className="w-full h-full absolute object-cover -z-10" style={{ backgroundImage: `url(${wall})`, backgroundPosition: 'center', backgroundSize: 'cover', transform: 'translateZ(-3px) scale(1.5)'}}>
        </div>
        <h1 className="absolute left-16 bottom-16 text-8xl uppercase text-white">立足香港 . 背靠嶺南 . 眼向世界</h1>
      </header>
      <div className="flex justify-between h-1/3 font-ss">
        <aside className="flex flex-col w-1/2 h-full bg-maroon text-white">
          <div className="flex justify-between items-start w-full h-1/2 p-6">
            <ul>
              <li>Head Office</li>
              <li>1500 – 1021</li>
              <li>W Broadway St, Hong Kong</li>
            </ul>
            <p className="right-6">19:12:55</p>
          </div>
          <div className="flex justify-end items-end w-full h-1/2 p-6">
            down arrow
          </div>
        </aside>
        <aside className="flex justify-end w-1/2 h-full p-6 bg-beige">
          <ul className="text-right">
            <li>Contact</li>
            <li>+(852) 5505 8831</li>
            <li>contact@redbridge.com</li>
          </ul>
        </aside>
      </div>
    </>
  )
}