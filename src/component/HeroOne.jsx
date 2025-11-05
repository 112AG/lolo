import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

function HeroOne() {
  const textRef = useRef(null);
  const paraOneRef = useRef(null);
  const paraTwoRef = useRef(null);

  const text = "ART DIRECTOR";

  const paraOne = `With 6+ years of experience and 100+ brands globally, I create unique, trend-driven designs across branding, advertising, web, and packaging. From Mumbai, Kolkata, Varanasi, and Delhi to Ahmedabad, my journey shapes designs that captivate and exceed expectations.`;

  const paraTwo = `Based in Ahmedabad, I work as an Assistant Design Manager at ADZ Network Media, a multinational design agency in Oman. I create impactful designs across branding, advertising, UI/UX, and packaging that resonate with audiences and build memorable brand identities.`;

  // Memoize split text to avoid re-creating on every render
  const splitText = useMemo(() => {
    const createSplitText = (text) =>
      text.split(" ").map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block">
            {word.split("").map((char, j) => (
              <span key={j} className="inline-block">
                {char}
              </span>
            ))}
          </span>{" "}
        </React.Fragment>
      ));
    
    return {
      paraOneContent: createSplitText(paraOne),
      paraTwoContent: createSplitText(paraTwo),
    };
  }, []); // Empty deps - text never changes

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading (ART DIRECTOR)
      if (textRef.current) {
        const letters = textRef.current.querySelectorAll("span");
        gsap.fromTo(
          letters,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power3.out",
          }
        );
      }

      // Animate paragraph one
      if (paraOneRef.current) {
        const letters = paraOneRef.current.querySelectorAll("span span");
        gsap.fromTo(
          letters,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.015,
            duration: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Animate paragraph two
      if (paraTwoRef.current) {
        const letters = paraTwoRef.current.querySelectorAll("span span");
        gsap.fromTo(
          letters,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.015,
            duration: 0.2,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full mx-auto mb-12 px-4 sm:px-6 lg:px-10 pt-[96px] md:pt-[124px]">
      {/* Heading */}
      <h1
        className="font-700 text-center font-presser-bold leading-[1.1] text-[7.5vw] xl:text-[7.8vw] 2xl:text-[8vw]"
        ref={textRef}
      >
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Content Flex */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10 mt-6">
        {/* Paragraph One */}
        <p
          ref={paraOneRef}
          className="break-normal whitespace-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full text-left font-maisonneue-demi leading-relaxed"
        >
          {splitText.paraOneContent}
        </p>

        {/* Paragraph Two */}
        <p
          ref={paraTwoRef}
          className="break-normal whitespace-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full font-maisonneue-demi leading-relaxed"
        >
          {splitText.paraTwoContent}
        </p>

        {/* CTA Link */}
        <button
          onClick={handleClick}
          className="text-white underline px-6 py-2 rounded-[24px] transition font-maisonneue-medium bg-[#0B0B0B] whitespace-nowrap"
        >
          LET'S CONNECT →
        </button>
      </div>
    </div>
  );
}

export default HeroOne;

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { Link } from "react-router-dom";
// import artistrebelConnect from "../assets/artistrebel-connect.webp";
// import { useNavigate } from "react-router-dom";

// function HeroOne() {
//   const textRef = useRef(null);
//   const paraOneRef = useRef(null);
//   const paraTwoRef = useRef(null);

//   const text = "ART DIRECTOR";

//   const paraOne = `With 6+ years of experience and 100+ brands globally, I create unique, trend-driven designs across branding, advertising, web, and packaging. From Mumbai, Kolkata, Varanasi, and Delhi to Ahmedabad, my journey shapes designs that captivate and exceed expectations.`;

//   const paraTwo = `Based in Ahmedabad, I work as an Assistant Design Manager at ADZ Network Media, a multinational design agency in Oman. I create impactful designs across branding, advertising, UI/UX, and packaging that resonate with audiences and build memorable brand identities.`;

//   // Helper to split words into spans for animation
//   const splitText = (text) =>
//     text.split(" ").map((word, i) => (
//       <React.Fragment key={i}>
//         <span className="inline-block">
//           {word.split("").map((char, j) => (
//             <span key={j} className="inline-block">
//               {char}
//             </span>
//           ))}
//         </span>{" "}
//       </React.Fragment>
//     ));

//   useGSAP(() => {
//     // Animate heading (ART DIRECTOR)
//     if (textRef.current) {
//       const letters = textRef.current.querySelectorAll("span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.1,
//           duration: 0.3,
//           ease: "power3.out",
//         }
//       );
//     }

//     // Animate paragraph one
//     if (paraOneRef.current) {
//       const letters = paraOneRef.current.querySelectorAll("span span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           stagger: 0.015,
//           duration: 0.2,
//           ease: "power2.out",
//         }
//       );
//     }

//     // Animate paragraph two
//     if (paraTwoRef.current) {
//       const letters = paraTwoRef.current.querySelectorAll("span span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           stagger: 0.015,
//           duration: 0.2,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, []);

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/contact"); // 👈 your contact page route
//   };

//   return (
//     <div className="w-full mx-auto mb-12 px-4 sm:px-6 lg:px-10 pt-[96px] md:pt-[124px]">
//       {/* Heading */}
//       <h1
//         className="font-700 text-center font-presser-bold leading-[1.1] text-[7.5vw] xl:text-[7.8vw] 2xl:text-[8vw]"
//         ref={textRef}
//       >
//         {text.split("").map((char, i) => (
//           <span key={i} className="inline-block">
//             {char === " " ? "\u00A0" : char}
//           </span>
//         ))}
//       </h1>

//       {/* Content Flex */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10 mt-6">
//         {/* Paragraph One */}
//         <p
//           ref={paraOneRef}
//           className="break-normal whitespace-normal texttext-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full text-left font-maisonneue-demi leading-relaxed"
//         >
//           {splitText(paraOne)}
//         </p>

//         {/* Paragraph Two */}
//         <p
//           ref={paraTwoRef}
//           className="break-normal whitespace-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full font-maisonneue-demi leading-relaxed"
//         >
//           {splitText(paraTwo)}
//         </p>

//         {/* CTA Link */}
//         <button
//           onClick={handleClick}
//           className="text-white underline px-6 py-2 rounded-[24px] transition font-maisonneue-medium bg-[#0B0B0B] whitespace-nowrap"
//         >
//           LET'S CONNECT →
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HeroOne;
