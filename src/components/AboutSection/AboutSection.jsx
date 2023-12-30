import Carousel from "./Carousel";
import { useContext, useState } from "react";
import { LanguageContext } from "../../App";

const displayText = {
  about: {
    0: "About\nRed Bridge",
    1: "关于红桥",
    2: "關於紅橋"
  },
}

export default function AboutSection() {
  const { language, isChangingLanguage } = useContext(LanguageContext);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
    setScrollHeight(event.target.scrollHeight);
    setClientHeight(event.target.clientHeight);
  };

  function getBoxShadow() {
    const isBottom = clientHeight === scrollHeight - scrollTop;
    const isTop = scrollTop === 0;
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;
    
    if (isTop) return 'xl:shadow-bottomScroll';
    if (isBetween) return 'xl:shadow-betweenScroll';
    if (isBottom) return 'xl:shadow-topScroll';
  }

  return (
    <section id="about-section" className="w-full h-auto xl:h-full flex flex-col xl:flex-row justify-between relative z-10">
      <Carousel className={"w-full xl:w-1/2 h-96 xl:h-full relative -z-30 overflow-hidden"} />
      <aside
        className={`w-full h-3/4 flex flex-col bg-beige text-slate py-[8vw] px-[5vw] leading-snug
          xl:w-1/2 xl:h-full xl:pt-[4vw] xl:pb-[2vw] xl:p-[4vw] xl:overflow-scroll xl:overflow-x-hidden ${getBoxShadow()}`}
        onScroll={handleScroll}
      >
        <h1 className={`font-ssm uppercase text-[12vw] sm:text-[5vw] mb-[6vw] sm:mb-[2vw] leading-tight
          whitespace-pre-wrap duration-300 ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}
        >
          {displayText["about"][language]}
        </h1>
        <p className="mb-[2vw] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Red Bridge Capital is a Hong Kong-based investment firm with a strong focus on China. We have built a diverse portfolio of investment vehicles and strategies, driven by a history of success in various sectors, reflecting our unwavering commitment to delivering outstanding results for our investors.
        </p>
        <h2 className="font-ssm uppercase leading-none mt-[2vw] mb-[2vw] text-2xl sm:text-3xl md:text-4xl">
          Our Approach
        </h2>
        <p className="mb-[2vw] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Our roots in Hong Kong position us as a crucial bridge to China's thriving investment landscape. We are dedicated to identifying and seizing opportunities within China, leveraging our extensive network and deep understanding of the Chinese market to discover undervalued prospects that often go unnoticed.
        </p>
        <p className="mb-[2vw] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          We go beyond traditional investment management. We actively engage in the companies we invest in, drawing on our expertise and experiences, as well as the collaborative synergy with our investors, to foster mutual growth.
        </p>
        <h2 className="font-ssm uppercase leading-none mt-[2vw] mb-[2vw] text-2xl sm:text-3xl md:text-4xl">
          Bridging Connections
        </h2>
        <p className="mb-[2vw] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          More than just investment managers, we are bridge builders. Our leadership team's international background, rooted in Hong Kong, equips us to seamlessly facilitate companies' transition in and out of China, transcending barriers and fostering global connections.
        </p>
        <h2 className="font-ssm uppercase leading-none mt-[2vw] mb-[2vw] text-2xl sm:text-3xl md:text-4xl">
          Our Fundamental Values
        </h2>
        <p className="mb-[2vw] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Integrity and transparency form the bedrock of our bridge, enabling us to connect opportunities, nurture  relationships, and navigate the intricacies of the financial landscape. These principles guide our work, ensuring the highest level of professionalism and reliability in all our endeavors.
        </p>
        <p className="mb-[2vw] text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          As we progress, Red Bridge Capital remains steadfast in our commitment to excellence, partnership cultivation, and pioneering new horizons in the realm of investment.
        </p>
      </aside>
    </section>
  )
}