import React from "react";
import jugadSpecialist from "../assets/stickers/jugadSpecialist.png";
import instagram from "../assets/stickers/instagram.png";
import whatsapp from "../assets/stickers/whatsapp.png";
import pinterest from "../assets/stickers/pinterest.png";
import youtube from "../assets/stickers/youtube.png";
import linkedin from "../assets/stickers/linkedin.png";
import designCardio from "../assets/stickers/designCardio.png";
import group126584 from "../assets/stickers/Group 126584.png";

function Stickers() {
  return (
    <div className=" w-full  flex items-center justify-center overflow-hidden">
      <div
        className="relative bg-[#0A0A0A] w-[320px] sm:w-[640px] lg:w-[1024px] 2xl:w-[1280px] aspect-[16/7]"
      >
        <img
          src={jugadSpecialist}
          alt="Jugad Specialist"
          className="absolute sm:w-[144px] lg:w-[244px] 2xl:w-[335px] left-[9%] lg:left-[8%] 2xl:left-16 top-[25%] lg:top-[18%] 2xl:top-18"
        />

        <img
          src={instagram}
          alt="Instagram"
          className="absolute sm:w-[184px] lg:w-[284px] 2xl:w-[344px] left-[31%] bottom-[42%] 2xl:bottom-70"
        />

        <img
          src={whatsapp}
          alt="WhatsApp"
          className="absolute sm:w-[164px] lg:w-[264px] 2xl:w-[384px] left-[56.5%] lg:left-[57%] 2xl:left-[56%] bottom-[32%] lg:bottom-[42%]"
        />

        <img
          src={pinterest}
          alt="Pinterest"
          className="absolute sm:w-[144px] lg:w-[242px] 2xl:w-[322px] left-[46.5%] lg:left-[50%] 2xl:left-[47%] bottom-[26%] lg:bottom-[32.5%] 2xl:bottom-[36%]"
        />

        <img
          src={youtube}
          alt="YouTube"
          className="absolute sm:w-[164px] lg:w-[262px] 2xl:w-[384px] right-0 left-[52%] lg:left-[54%] 2xl:left-[50%] bottom-[1.5%] lg:bottom-[5.5%]"
        />

        <img
          src={linkedin}
          alt="LinkedIn"
          className="absolute sm:w-[166px] lg:w-[312px] 2xl:w-[384px] bottom-0 left-[5%] 2xl:left-0"
        />

        <img
          src={designCardio}
          alt="Design is My Cardio"
          className="absolute sm:w-[164px] lg:w-[284px] 2xl:w-[404px] sm:left-[27%] lg:left-79 bottom-0 "
        />

        <img
          src={group126584}
          alt="Thinking 10% Clicking 90%"
          className="absolute sm:w-[144px] lg:w-[264px] 2xl:w-[362px] left-[74.5%] lg:left-[75%] 2xl:left-[76%] rotate-11 bottom-[-2%] lg:bottom-[0%] 2xl:bottom-[-2%]"
        />
      </div>
    </div>
  );
}

export default Stickers;
{
  /* <div>
        <img
          src={jugadSpecialist}
          alt="Jugad Specialist"
          className="max-[640px]:w-25 sm:w-36 md:w-40 lg:w-44 xl:w-44 min-[1440px]:!w-[335px] h-auto transform rotate-12 absolute 
               bottom-16 sm:bottom-20 md:bottom-22 lg:bottom-20 xl:bottom-37
               left-[5%] sm:left-[10%] md:left-[12.5%] lg:left-[16%] xl:left-[17%] min-[1440px]:!left-[11.2%]"
        />

        <img
          src={instagram}
          alt="Instagram"
          className="w-24 sm:w-40 md:w-44 lg:w-48 xl:w-48 min-[1440px]:!w-[444px] h-auto transform rotate-2 absolute 
               bottom-34 sm:bottom-36 md:bottom-42 lg:bottom-38 xl:bottom-37 min-[1440px]:!bottom-60
               left-[33.5%] sm:left-[32%] md:left-[32.5%] lg:left-[33%] xl:left-[32%] min-[1440px]:!left-[28.5%]"
        />

        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-23 sm:w-40 md:w-44 lg:w-48 xl:w-48 min-[1440px]:!w-[384px] h-auto transform absolute 
               bottom-24.5 sm:bottom-25 md:bottom-32 lg:bottom-30 xl:bottom-51
               left-[43%] -rotate-8 sm:left-[49%] sm:-rotate-10 md:rotate-0 md:left-[52%] lg:left-[50.5%] xl:left-[50.6%]"
        />

        <img
          src={pinterest}
          alt="Pinterest"
          className="w-22 sm:w-36 md:w-40 lg:w-44 xl:w-44 min-[1440px]:!w-[384px] h-auto transform absolute 
               bottom-20 sm:bottom-17.5 md:bottom-22.5 lg:bottom-22 xl:bottom-38
               left-[40%] sm:left-[48.5%] md:left-[47.5%] lg:left-[45.6%] xl:left-[41%] xl:-rotate-2"
        />

        <img
          src={youtube}
          alt="YouTube"
          className="w-24 sm:w-40 md:w-44 lg:w-48 xl:w-48 min-[1440px]:!w-[432px] h-auto transform rotate-2 absolute 
               bottom-0 sm:-bottom-2.5 md:-bottom-1.5 lg:-bottom-[10px] lg:rotate-10 xl:rotate-3 xl:-bottom-6
               left-[54%] sm:left-[48.5%] sm:rotate-10 md:rotate-0 md:left-[46%] lg:left-[46%] xl:left-[45.5%]"
        />

        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-22 sm:w-40 md:w-44 lg:w-48 xl:w-48 min-[1440px]:!w-[384px] h-auto transform -rotate-3 absolute 
               bottom-6 sm:bottom-2 md:bottom-3 lg:bottom-0 xl:bottom-0 
               left-[1%] sm:left-[6%] md:left-[8.5%] lg:left-[13.5%] xl:left-[11.2%]"
        />

        <img
          src={designCardio}
          alt="Design is My Cardio"
          className="w-30 sm:w-44 md:w-48 lg:w-54 xl:w-54 min-[1440px]:!w-[336px] h-auto transform rotate-12 absolute 
               bottom-0.5 sm:bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0 
               left-[25%] sm:left-[27%] md:left-[28%] lg:left-[29%] xl:left-[29%]"
        />

        <img
          src={group126584}
          alt="Thinking 10% Clicking 90%"
          className="w-30 sm:w-44 md:w-48 lg:w-54 xl:w-54 min-[1440px]:!w-[365px] h-auto transform -rotate-12 absolute 
               bottom-8 sm:bottom-0 md:bottom-0 lg:-bottom-4 xl:-bottom-10
               left-[64.5%] sm:left-[68%] md:left-[66.5%] md:rotate-10 lg:rotate-11 lg:left-[64%] xl:left-[65%]"
        />
      </div> */
}
