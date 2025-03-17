// import { useEffect, useState } from "react";
import heroSestionImage from "../../assets/images/home-page-animation.gif";
import mobileHeroSestionImage from "../../assets/images/mobile-home-page-image2.gif";
// import heroSectionIcon from "../../assets/images/icon-dance.png";
import psstImage from "../../assets/images/psst-animation2.gif";
import mobilePsstImage from "../../assets/images/mobile-psst-animation.gif";
function HeroSection() {
  // const [imageLoaded, setImageLoaded] = useState(false);
  // const [contentVisible, setContentVisible] = useState(false);

  // useEffect(() => {
  //   setImageLoaded(true);
  //   const timer = setTimeout(() => {
  //     setContentVisible(true);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="">
      {/* <img
        src={smilyIcon}
        alt="icon"
        className="w-10 h-10 absolute top-24 right-10 block md:hidden"
      /> */}
      {window.matchMedia("(max-width: 767px)").matches ? (
        <img
          src={mobileHeroSestionImage}
          className="w-full h-auto max-h-[900px] object-contain"
          alt="hero-section-image"
        />
      ) : (
        <img
          src={heroSestionImage}
          className="w-full h-auto max-h-[900px] object-contain"
          alt="hero-section-image"
        />
      )}
      <div className="w-full max-w-[1536px] mx-auto">
        {/* <div className="relative flex items-center justify-center py-8 sm:py-12">
          <div className="absolute left-0 w-full h-[1px] bg-black">
            <div className="relative w-full h-full">
              <div
                className={`absolute inset-y-0 right-[50%] w-[calc(50%-120px)] sm:w-[calc(50%-160px)] bg-black transition-opacity duration-1000 ${
                  contentVisible ? "opacity-30" : "opacity-0"
                }`}
              ></div>
              <div
                className={`transition-opacity duration-1000 ${
                  contentVisible ? "opacity-30" : "opacity-0"
                } absolute inset-y-0 left-[50%] w-[calc(50%-120px)] sm:w-[calc(50%-160px)] bg-black`}
              ></div>
            </div>
          </div>

          <div className="relative flex items-center gap-2 bg-white z-10">
            <div
              className={`sm:px-4 sm:py-1 md:px-10 md:py-2 lg:px-16 lg:py-4 px-16 py-4 rounded-2xl border border-[#FFD700]  transition-all duration-1000 ${
                contentVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl sm:text-xl font-playfair italic">
                Pssst...With Us
              </h2>
            </div>
            <div
              className={`relative sm:w-[50px] sm:[h-50px] md:w-[90px] md:h-[90px] lg:w-[135px] lg:h-[135px] w-135px h-135px ml-[-60px] sm:ml-[-20px] md:ml-[-30px] lg:ml-[-60px] mt-[30px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] transition-all duration-1000 ${
                imageLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <img
                src={heroSectionIcon}
                alt="Mascot"
                className="w-full h-full"
              />
            </div>
          </div>
        </div> */}

        {window.matchMedia("(max-width: 767px)").matches ? (
          <img
            src={mobilePsstImage}
            className="w-full h-auto max-h-[900px] object-contain mb-8"
            alt="hero-section-image"
          />
        ) : (
          <img src={psstImage} className="w-full h-auto max-h-[900px] object-contain mb-16" alt="hero-section-image" />
        )}
      </div>
    </div>
  );
}

export default HeroSection;
