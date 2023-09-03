import ifc from "../assets/images/ifc.jpg";

export default function AboutSection() {
  return (
    <section className="w-full h-screen relative flex -z-10" style={{ transformStyle: 'preserve-3d' }}>
      <aside
        className="w-1/2 h-full object-cover -z-10"
        style={{ backgroundImage: `url(${ifc})`, backgroundPosition: 'center',
        backgroundSize: 'cover', transform: 'translateZ(-4px) scale(1.6)'}}>
      </aside>
      <aside className="w-1/2 h-full bg-white flex flex-col pl-16 pb-14 justify-end text-slate">
        <h1 className="font-ssm uppercase text-8xl mb-12">About<br />Red Bridge</h1>
        <p className="font-ss text-xl w-3/4 mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis error ex sunt pariatur deleniti atque, unde dolorem doloribus voluptas voluptatem suscipit quaerat repellendus vero? Beatae doloribus aperiam sint corporis?</p>
        <p className="font-ss text-xl w-3/4 mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis error ex sunt pariatur deleniti atque, unde dolorem doloribus voluptas voluptatem suscipit quaerat repellendus vero? Beatae doloribus aperiam sint corporis?</p>
      </aside>
    </section>
  )
}