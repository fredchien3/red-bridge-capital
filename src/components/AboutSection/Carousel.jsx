import ifc from "../../assets/images/ifc.jpg";
import clouds from "../../assets/images/clouds.jpg";
import nubFull from "../../assets/icons/nub_full.png";
import nubEmpty from "../../assets/icons/nub_empty.png";
import { useEffect, useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Carousel() {
  const images = [ifc, clouds];
  const [index, setIndex] = useState(0);
   
  const [banners, nubs] = [[], []];
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    banners.push(
      <img
        src={image}
        className={"h-full w-full object-cover absolute duration-500 " + (index === i ? "visible opacity-100" : "invisible opacity-0")}
        key={image}
      />
    );
      
    nubs.push(
      <img
        src={index === i ? nubFull : nubEmpty}
        className="ml-3 z-10 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIndex(i);
        }}
        key={image}
      />
    );
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => i === 0 ? 1 : 0);
    }, 10000);

    return () => clearInterval(interval);
  }, [])
  
  return (
    <div id="parcon" className="h-64 w-full md:h-full md:w-1/2 relative -z-30 overflow-hidden">
      <Parallax
        speed={-15}
        scale={[1.5, 1.5]}
        className="h-full w-full relative"
        id="parban"
      >
        {banners}
      </Parallax>
      <div className="absolute z-10 top-8 right-[4.5rem] flex h-2">
        {nubs}
      </div>
    </div>
  )
}