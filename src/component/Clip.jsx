import React, { useEffect, useRef } from "react";
import ArtistRebelThought from "../assets/ArtistRebelThought.mp4";

function Clip() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play video every time it comes into view
            video.play();
          } else {
            // Pause video when it goes out of view
            video.pause();
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 8% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);
  return (
    <div>
      <div className="mt-8 sm:mt-12 flex justify-center">
        <video
          ref={videoRef}
          className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[668px] xl:max-w-[851px]"
          muted
          playsInline
        >
          <source src={ArtistRebelThought} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Clip;
