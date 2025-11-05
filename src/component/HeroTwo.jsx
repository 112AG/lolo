import React, { useMemo } from "react";
import asain from "../assets/work/artistrebelasain-paints.png";
import aster from "../assets/work/artistrebelaster.png";
import nizwa from "../assets/work/artistrebelbank-nizwa.png";
import blackberrys from "../assets/work/artistrebelblackberrys.png";
import bmw from "../assets/work/artistrebelBMW.png";
import clubmahindra from "../assets/work/artistrebelclubmahindra.png";
import Dominos from "../assets/work/artistrebelDominos.png";
import geely from "../assets/work/artistrebelgeely.png";
import hughes from "../assets/work/artistrebelhughes.png";
import iilm from "../assets/work/artistrebeliilm.png";
import kfc from "../assets/work/artistrebelkcf.png";
import Mandoobi from "../assets/work/artistrebelMandoobi.png";
import mazda from "../assets/work/artistrebelmazda.png";
import muc from "../assets/work/artistrebelmuc.png";
import Muscat from "../assets/work/artistrebelMuscatUnivercity.png";
import ooredoo from "../assets/work/artistrebelooredoo.png";
import Parle from "../assets/work/artistrebelparle.png";
import pind from "../assets/work/artistrebelpind-balluchi.png";
import Polyglot from "../assets/work/artistrebelPolyglot.png";
import rasbin from "../assets/work/artistrebelrasbin.png";
import rhinoforce from "../assets/work/artistrebelrhinoforce.png";
import rrl from "../assets/work/artistrebelrrl.png";
import shalby from "../assets/work/artistrebelshalby.png";
import skoda from "../assets/work/artistrebelskoda.png";
import smartpig from "../assets/work/artistrebelsmart-pig.png";
import sultanmarket from "../assets/work/artistrebelsultanmarket.png";
import Tally from "../assets/work/artistrebelTally.png";
import taximuscat from "../assets/work/artistrebeltaximuscat.png";

// Array of all images
const workImagesOne = [
  pind,
  Dominos,
  kfc,
  Parle,
  Tally,
  hughes,
  clubmahindra,
  blackberrys,
  Muscat,
];
const workImagesTwo = [
  muc,
  Polyglot,
  rasbin,
  nizwa,
  aster,
  shalby,
  sultanmarket,
  ooredoo,
  smartpig,
  geely,
];
const workImagesThree = [
  mazda,
  bmw,
  skoda,
  taximuscat,
  Mandoobi,
  asain,
  rrl,
  rhinoforce,
  iilm,
];

// Helper to repeat images for seamless scroll
const repeatImages = (arr, times = 2) => Array(times).fill(arr).flat();

// Reusable component for logo items
const LogoItem = React.memo(({ img, alt, index }) => (
  <div className="bg-[#EEE6E2] rounded-[6px] sm:rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-22 h-10 p-2 shadow-sm">
    <img
      src={img}
      alt={alt}
      className="object-contain max-h-full max-w-full"
      loading="lazy"
    />
  </div>
));

LogoItem.displayName = 'LogoItem';

function HeroTwo() {
  // Memoize repeated arrays to prevent recreation on every render
  const repeatedImagesOne = useMemo(() => [...workImagesOne, ...workImagesOne], []);
  const repeatedImagesTwo = useMemo(() => [...workImagesTwo, ...workImagesTwo], []);
  const repeatedImagesThree = useMemo(() => repeatImages(workImagesThree), []);

  return (
    <div className="w-full overflow-hidden py-18">
      <h1
        className="
          w-full 
          break-words 
          text-center 
          font-extrabold 
          leading-tight 
          text-[#EEE6E2] px-2
          mb-8 
          font-presser-bold
          text-[30px]   
          sm:text-[56px]
          md:text-[72px]
          lg:text-[88px]         
          xl:text-[96px]         
        "
      >
        WORK WITH
      </h1>

      <div className="space-y-2 sm:space-y-6">
        {/* Layer 1: scroll right */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-2 sm:gap-4 animate-scroll-right" style={{ width: "max-content" }}>
            {repeatedImagesOne.map((img, idx) => (
              <LogoItem
                key={`one-${idx}`}
                img={img}
                alt={`work-logo-one-${idx + 1}`}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* Layer 2: scroll left */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-2 sm:gap-4 animate-scroll-left" style={{ width: "max-content" }}>
            {repeatedImagesTwo.map((img, idx) => (
              <LogoItem
                key={`two-${idx}`}
                img={img}
                alt={`work-logo-two-${idx + 1}`}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* Layer 3: scroll right (slower) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-4 animate-scroll-right-slow"
            style={{ width: "max-content" }}
          >
            {repeatedImagesThree.map((img, idx) => (
              <LogoItem
                key={`three-${idx}`}
                img={img}
                alt={`work-logo-three-${idx + 1}`}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;

// import React from "react";
// import asain from "../assets/work/artistrebelasain-paints.png";
// import aster from "../assets/work/artistrebelaster.png";
// import nizwa from "../assets/work/artistrebelbank-nizwa.png";
// import blackberrys from "../assets/work/artistrebelblackberrys.png";
// import bmw from "../assets/work/artistrebelBMW.png";
// import clubmahindra from "../assets/work/artistrebelclubmahindra.png";
// import Dominos from "../assets/work/artistrebelDominos.png";
// import geely from "../assets/work/artistrebelgeely.png";
// import hughes from "../assets/work/artistrebelhughes.png";
// import iilm from "../assets/work/artistrebeliilm.png";
// import kfc from "../assets/work/artistrebelkcf.png";
// import Mandoobi from "../assets/work/artistrebelMandoobi.png";
// import mazda from "../assets/work/artistrebelmazda.png";
// import muc from "../assets/work/artistrebelmuc.png";
// import Muscat from "../assets/work/artistrebelMuscatUnivercity.png";
// import ooredoo from "../assets/work/artistrebelooredoo.png";
// import Parle from "../assets/work/artistrebelparle.png";
// import pind from "../assets/work/artistrebelpind-balluchi.png";
// import Polyglot from "../assets/work/artistrebelPolyglot.png";
// import rasbin from "../assets/work/artistrebelrasbin.png";
// import rhinoforce from "../assets/work/artistrebelrhinoforce.png";
// import rrl from "../assets/work/artistrebelrrl.png";
// import shalby from "../assets/work/artistrebelshalby.png";
// import skoda from "../assets/work/artistrebelskoda.png";
// import smartpig from "../assets/work/artistrebelsmart-pig.png";
// import sultanmarket from "../assets/work/artistrebelsultanmarket.png";
// import Tally from "../assets/work/artistrebelTally.png";
// import taximuscat from "../assets/work/artistrebeltaximuscat.png";

// // Array of all images
// const workImagesOne = [
//   pind,
//   Dominos,
//   kfc,
//   Parle,
//   Tally,
//   hughes,
//   clubmahindra,
//   blackberrys,
//   Muscat,
// ];
// const workImagesTwo = [
//   muc,
//   Polyglot,
//   rasbin,
//   nizwa,
//   aster,
//   shalby,
//   sultanmarket,
//   ooredoo,
//   smartpig,
//   geely,
// ];
// const workImagesThree = [
//   mazda,
//   bmw,
//   skoda,
//   taximuscat,
//   Mandoobi,
//   asain,
//   rrl,
//   rhinoforce,
//   iilm,
// ];

// // Helper to repeat images for seamless scroll
// const repeatImages = (arr, times = 2) => Array(times).fill(arr).flat();

// function HeroTwo() {
//   return (
//     <div className="w-full overflow-hidden py-18">
// <h1
//   className="
//     w-full 
//     break-words 
//     text-center 
//     font-extrabold 
//     leading-tight 
//     text-[#EEE6E2] px-2
//     mb-8 
//     font-presser-bold
//     text-[30px]   
//     sm:text-[56px]
//     md:text-[72px]
//     lg:text-[88px]         
//     xl:text-[96px]         
//   "
// >
//   WORK WITH
// </h1>

//       <div className="space-y-2 sm:space-y-6">
//         {/* Layer 1: scroll right */}
//         <div className="overflow-hidden w-full">
//           <div className="flex gap-2 sm:gap-4 animate-scroll-right" style={{ width: "max-content" }}>
//             {[...workImagesOne, ...workImagesOne].map((img, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#EEE6E2] rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-28 h-14 p-2 shadow-sm"
//               >
//                 <img
//                   src={img}
//                   alt={`work-logo-one-${idx + 1}`}
//                   className="object-contain max-h-full max-w-full"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Layer 2: scroll left */}
//          <div className="overflow-hidden w-full">
//           <div className="flex gap-2 sm:gap-4 animate-scroll-left" style={{ width: "max-content" }}>
//             {[...workImagesTwo, ...workImagesTwo].map((img, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#EEE6E2] rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-28 h-14 p-2 shadow-sm"
//               >
//                 <img
//                   src={img}
//                   alt={`work-logo-two-${idx + 1}`}
//                   className="object-contain max-h-full max-w-full"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Layer 3: scroll right (slower) */}
//         <div className="overflow-hidden w-full">
//           <div
//             className="flex gap-2 sm:gap-4 animate-scroll-right-slow"
//             style={{ width: "max-content" }}
//           >
//             {repeatImages(workImagesThree).map((img, idx) => (
//               <div
//                 key={`three-${idx}`}
//                 className="bg-[#EEE6E2] rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-28 h-14 p-2 shadow-sm"
//               >
//                 <img
//                   src={img}
//                   alt={`work-logo-three-${idx + 1}`}
//                   className="object-contain max-h-full max-w-full"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroTwo;
