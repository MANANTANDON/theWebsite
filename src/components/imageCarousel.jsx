import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const ImageCarousel = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section").forEach((section, i) => {
      const sectionBg = section.querySelector(".bg");
      sectionBg.style.backgroundImage = `url(${i + 1}.png`;
      gsap.fromTo(
        sectionBg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section>
        <div className="bg"></div>
        <h1>to getting older, wiser and hopefully little bit better. </h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>
          Nothing just my inner child screaming to have finally owned one 😭🧣
        </h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>wraping up the year in all its color 🌈✨</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>💙</h1>
      </section>
      <section>
        <div className="bg"></div>
        <h1>Stacking my room with books and vinyls is what i hope to do</h1>
      </section>
    </>
  );
};
