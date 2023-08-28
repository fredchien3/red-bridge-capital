import wall from "../assets/images/wall.jpg";

export default function IntroSection() {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-2/3 relative">
        <div className="w-full h-full" style={{ backgroundImage: `url(${wall})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        <h1 className="text-7xl uppercase text-white">立足香港 . 背靠嶺南 . 眼向世界</h1>
      </div>
      <div className="flex justify-between h-1/3">
        <div className="flex flex-col w-1/2 h-full bg-red-700 text-white">
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
        </div>
        <div className="flex justify-end w-1/2 h-full p-6 bg-amber-50">
          <ul className="text-right">
            <li>Contact</li>
            <li>+(852) 5505 8831</li>
            <li>contact@redbridge.com</li>
          </ul>
        </div>
      </div>
    </section>
  )
}