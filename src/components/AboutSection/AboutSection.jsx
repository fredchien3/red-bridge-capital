import Carousel from "./Carousel";

export default function AboutSection() {
  return (
    <section id="about-section" className="w-full h-screen flex justify-between">
      <Carousel />
      <aside className="w-1/2 h-full bg-white flex flex-col pl-20 pb-14 justify-end text-slate z-10">
        <h1 className="font-ssm uppercase text-8xl mb-12">About<br />Red Bridge</h1>
        <p className="w-3/4 mt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis error ex sunt pariatur deleniti atque, unde dolorem doloribus voluptas voluptatem suscipit quaerat repellendus vero? Beatae doloribus aperiam sint corporis?
        </p>
        <p className="w-3/4 mt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis error ex sunt pariatur deleniti atque, unde dolorem doloribus voluptas voluptatem suscipit quaerat repellendus vero? Beatae doloribus aperiam sint corporis?
        </p>
      </aside>
    </section>
  )
}