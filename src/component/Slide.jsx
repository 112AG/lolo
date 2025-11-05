import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Slide() {
  const headRef = React.useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isTablet: "(min-width: 769px) and (max-width: 1279px)",
        isLargeScreen: "(min-width: 1280px)",
      },
      () => {
        const el = headRef.current;
        const elWidth = el.scrollWidth; // total text width
        const vw = window.innerWidth;   // viewport width

        // how much we need to move (element width - viewport width)
        const moveX = -(elWidth - vw);

        gsap.to(el, {
          x: moveX, // ✅ always scroll full width regardless of screen
          ease: "none",
          scrollTrigger: {
            trigger: ".page",
            start: "top 50%",
            end: "top -80%",
            scrub: 2,
            pin: true,
            markers: false,
          },
        });
      }
    );
  }, []);

  return (
    <div className='page'>
      <h1 
        ref={headRef} 
        className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[200px] whitespace-nowrap text-[#696969] text-center mt-12 font-presser-bold"
      >
        Building Brands, Designing Experiences.
      </h1>
    </div>
  )
}

export default Slide;
