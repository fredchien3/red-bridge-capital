import Carousel from "./Carousel";
import { useContext } from "react";
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

  return (
    <section id="about-section" className="w-full h-auto md:h-full flex flex-col md:flex-row justify-between relative z-10">
      <Carousel />
      <aside className="w-full md:w-1/2 h-3/4 sm:h-2/3 md:h-full bg-white flex flex-col
      pt-[10vw] md:pt-0 pl-[6vw] md:pl-[4vw] pb-[10vw] 2xl:pb-[3vw] text-slate">
        <h1 className={`font-ssm uppercase text-[12vw] sm:text-[7vw] leading-none mb-[6vw] sm:mb-[2vw] whitespace-pre-wrap
          duration-300 ${isChangingLanguage ? 'opacity-0' : 'opacity-100'}`}>
          {displayText["about"][language]}
        </h1>
        <p className="w-[90%] leading-snug text-[3vw] md:text-[1.55vw] lg:text-[0.9vw] 2xl:text-xl mb-[2vw]">
          Red Bridge Capital is a Hong Kong-based investment firm with a strong focus on China. We have built a diverse portfolio of investment vehicles and strategies, driven by a history of success in various sectors, reflecting our unwavering commitment to delivering outstanding results for our investors.
        </p>
        <h2 className="font-ssm uppercase leading-none text-[5vw] md:text-[3vw] mt-[2vw] mb-[2vw]">
          Our Approach
        </h2>
        <p className="w-[90%] leading-snug text-[3vw] md:text-[1.55vw] lg:text-[0.9vw] 2xl:text-xl mb-[2vw]">
          Our roots in Hong Kong position us as a crucial bridge to China's thriving investment landscape. We are dedicated to identifying and seizing opportunities within China, leveraging our extensive network and deep understanding of the Chinese market to discover undervalued prospects that often go unnoticed.
        </p>
        <p className="w-[90%] leading-snug text-[3vw] md:text-[1.55vw] lg:text-[0.9vw] 2xl:text-xl mb-[2vw]">
          We go beyond traditional investment management. We actively engage in the companies we invest in, drawing on our expertise and experiences, as well as the collaborative synergy with our investors, to foster mutual growth.
        </p>
        <h2 className="font-ssm uppercase leading-none text-[5vw] md:text-[3vw] mt-[2vw] mb-[2vw]">
          Bridging Connections
        </h2>
        <p className="w-[90%] leading-snug text-[3vw] md:text-[1.55vw] lg:text-[0.9vw] 2xl:text-xl mb-[2vw]">
          More than just investment managers, we are bridge builders. Our leadership team's international background, rooted in Hong Kong, equips us to seamlessly facilitate companies' transition in and out of China, transcending barriers and fostering global connections.
        </p>
        <h2 className="font-ssm uppercase leading-none text-[5vw] md:text-[3vw] mt-[2vw] mb-[2vw]">
          Our Fundamental Values
        </h2>
        <p className="w-[90%] leading-snug text-[3vw] md:text-[1.55vw] lg:text-[0.9vw] 2xl:text-xl mb-[2vw]">
          Integrity and transparency form the bedrock of our bridge, enabling us to connect opportunities, nurture  relationships, and navigate the intricacies of the financial landscape. These principles guide our work, ensuring the highest level of professionalism and reliability in all our endeavors.
        </p>
        <p className="w-[90%] leading-snug text-[3vw] md:text-[1.55vw] lg:text-[0.9vw] 2xl:text-xl mb-[2vw]">
          As we progress, Red Bridge Capital remains steadfast in our commitment to excellence, partnership cultivation, and pioneering new horizons in the realm of investment.
        </p>
      </aside>
    </section>
  )
}