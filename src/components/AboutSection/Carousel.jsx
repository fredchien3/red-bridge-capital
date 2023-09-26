import ifc from "../../assets/images/ifc.jpg";
import clouds from "../../assets/images/clouds.jpg";
import nubFull from "../../assets/icons/nub_full.png";
import nubEmpty from "../../assets/icons/nub_empty.png";
import { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Carousel() {
  const images = [ifc, clouds];
  const [index, setIndex] = useState(0);
  
  const cycleIndex = (n = 1) => {
    let newIndex = index + n;
    if (n > 0) {
      if (newIndex >= images.length) newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setIndex(newIndex);
  }
  
  const [banners, nubs] = [[], []];
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    banners.push(
      <ParallaxBanner
        layers={[{ image: image, speed: -15 }]}
        className={index == i ? "h-full absolute visible opacity-100 duration-500" : "h-full absolute hidden opacity-0 duration-500"}
        key={image}
      />
    );
      
    nubs.push(
      <img
        src={index === i ? nubFull : nubEmpty}
        className="ml-3"
        onClick={() => setIndex(i)}
        key={image}
      />
    );
  }
      
  return (
    <div
      className="h-full w-1/2 cursor-pointer relative"
      onClick={() => cycleIndex(1)}
    >
      {banners}
        <div className="absolute z-10 top-8 right-[4.5rem] flex h-2">
        {nubs}
      </div>
    </div>
  )
}