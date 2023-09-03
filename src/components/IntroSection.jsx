import wall from "../assets/images/wall.jpg";

export default function IntroSection() {
  return (
    <>
      <header className="w-full h-4/5 relative flex justify-center items-center -z-10" style={{ transformStyle: 'preserve-3d' }}>
        <div
          className="w-full h-full absolute object-cover -z-10"
          style={{ backgroundImage: `url(${wall})`, backgroundPosition: 'center',
          backgroundSize: 'cover', transform: 'translateZ(-4px) scale(1.5)'}}>
        </div>
        <h1 className="absolute left-16 bottom-16 text-8xl uppercase text-white">立足香港 . 背靠嶺南 . 眼向世界</h1>
      </header>
      <section className="flex justify-between h-1/2 text-2xl">
        <aside className="flex flex-col justify-between w-1/2 h-full p-14 pr-16 bg-maroon text-white">
          <div className="flex justify-between items-end w-full">
            <ul className="leading-none">
              <li>Head Office</li>
              <li>1500 – 1021</li>
              <li>W Broadway St, Hong Kong</li>
            </ul>
            <p className="right-6">19:12:55</p>
          </div>
          <div className="flex justify-end items-end w-full">
            \/
          </div>
        </aside>
        <aside className="flex justify-end w-1/2 h-full p-14 bg-beige">
          <ul className="leading-none text-right">
            <li>Contact</li>
            <li>+(852) 5505 8831</li>
            <li>contact@redbridge.com</li>
          </ul>
        </aside>
      </section>
    </>
  )
}