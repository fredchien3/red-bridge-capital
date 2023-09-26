import ifc from "../../assets/images/ifc.jpg";
import clouds from "../../assets/images/clouds.jpg";
import { useState } from "react";

export default function Carousel() {
  const images = [ifc];
  const [index, setIndex] = useState(0);
  
  const cycleIndex = (n = 1) => {
    console.log('hey');
    let newIndex = index + n;
    if (n > 0) {
      if (newIndex >= images.length) newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setIndex(newIndex);
  }
  
  const [imgs, nubs] = [[], []];
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    imgs.push(
      <img
        className={index === i ? "absolute w-full h-full object-cover visible opacity-100 duration-500 cursor-pointer" : "absolute w-full h-full object-cover invisible opacity-0 duration-500"}
        style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center',
        backgroundSize: 'cover', transform: 'translateZ(-4px) scale(1.6)'}}
        key={image}
      />
    );

    nubs.push(
      <span
        className={index === i ? "featured-carousel-nub nub-active" : "featured-carousel-nub"}
        onClick={() => setIndex(i)}
        key={i}
      />
    );
  }

  return (
    <aside
      className="w-1/2 h-full relative cursor-pointer absolute"
      style={{ transformStyle: 'preserve-3d' }}
      onClick={() => cycleIndex(1)}
    >
      {imgs}
    </aside>
  )
}