export default function IntroSection() {
  return (
    <section className="bg-slate-200 h-screen">
      <div className="flex justify-start items-end p-10 bg-white h-2/3 relative">
        <h1 className="text-7xl uppercase fixed">It's time to start<br/>investing again.</h1>
        <p className="right-6 z-10 fixed">DateTime</p>
      </div>
      <div className="flex justify-between h-2/3">
        <div className="flex items-end w-1/2 h-full bg-red-300 z-10">
          <div className="flex justify-between items-end w-full p-6 bg-red-100">
            <ul>
              <li>head office</li>
              <li>1500-1021</li>
              <li>W Broadway St. Hong Kong</li>
            </ul>
            <ul>
              <li>phone</li>
              <li>1</li>
              <li>+123456789</li>
            </ul>
          </div>
        </div>
        <div className="flex items-end w-1/2 h-full bg-blue-300">
          <div className="flex justify-end items-end w-full p-6 bg-blue-100">
            contact@redbridge.com
            </div>
        </div>
      </div>
    </section>
  )
}