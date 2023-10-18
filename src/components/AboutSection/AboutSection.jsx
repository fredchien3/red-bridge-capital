import Carousel from "./Carousel";

export default function AboutSection() {
  return (
    <section id="about-section" className="w-full h-auto md:h-full flex flex-col md:flex-row justify-between relative z-10">
      <Carousel />
      <aside className="w-full md:w-1/2 h-3/4 sm:h-2/3 md:h-full bg-white flex flex-col justify-center md:justify-end
      pt-[10vw] md:pt-0 pl-[6vw] md:pl-[4vw] pb-[10vw] 2xl:pb-[3vw] text-slate">
        <h1 className="font-ssm uppercase text-[12vw] sm:text-[7vw] leading-none mb-[24vw] sm:mb-[10vw]">About<br />Red Bridge</h1>
        <p className="w-[90%] md:w-3/4 leading-none mt-[4vw] sm:mt-[4vw] text-[3vw] sm:text-[2vw] lg:text-[1.5vw] 2xl:text-[1vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis error ex sunt pariatur deleniti atque, unde dolorem doloribus voluptas voluptatem suscipit quaerat repellendus vero? Beatae doloribus aperiam sint corporis?
        </p>
        <p className="w-[90%] md:w-3/4 leading-none mt-[4vw] sm:mt-[4vw] text-[3vw] sm:text-[2vw] lg:text-[1.5vw] 2xl:text-[1vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam corporis error ex sunt pariatur deleniti atque, unde dolorem doloribus voluptas voluptatem suscipit quaerat repellendus vero? Beatae doloribus aperiam sint corporis?
        </p>
      </aside>
    </section>
  )
}