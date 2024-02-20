import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("body", {
      // LoadingAnimation---------------------
      opacity: 1,
      duration: 1.3,
    }); // /LoadingAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "0% 0%",
        end: "100% 0%",
        pin: "#ImgWrapper",
        scrub: 2.2,
      },
    });

    LandingPageScrollTrigger.to(
      "#ImgWrapper #img7",
      { transform: "translateZ(4500px)" },
      0
    )
      .to("#ImgWrapper #img6", { transform: "translateZ(3700px)" }, 0)
      .to("#ImgWrapper #img5", { transform: "translateZ(3100px)" }, 0)
      .to("#ImgWrapper #img4", { transform: "translateZ(2800px)" }, 0)
      .to("#ImgWrapper #img3", { transform: "translateZ(2600px)" }, 0)
      .to("#ImgWrapper #img2", { transform: "translateZ(2400px)" }, 0)
      .to("#ImgWrapper #img1", { transform: "translateZ(2200px)" }, 0)
      .from("#codeby a", { y: 130, opacity: 0 }, 0.31);

    // Cleanup function
    return () => {
      LandingPageScrollTrigger.kill(); // Kill the ScrollTrigger instance to avoid memory leaks
    };
  }, []);
  return (
    <>
      <div id="ImgWrapper">
        <img id="img1" src="9.png" alt="" />
        <img id="img2" src="8.png" alt="" />
        <img id="img3" src="12.png" alt="" />
        <img id="img4" src="10.jpg" alt="" />
        <img id="img5" src="7.png" alt="" />
        <img id="img6" src="11.png" alt="" />
        <img id="img7" src="6.png" alt="" />
      </div>
    </>
  );
};

export default Carousel;
