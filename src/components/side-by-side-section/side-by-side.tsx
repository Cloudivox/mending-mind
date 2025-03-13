import pay from "../../assets/images/pay.png";
import wellnessbox from "../../assets/images/wellness-box.png";
import sideSectionImage from "../../assets/images/side-by-side-image.png";
import twoLines from "../../assets/images/two-lines.png";
import CurveLine from "../../assets/images/curve-line";
import CurveMobile from "../../assets/images/curve-mobile";
import TwoLineMobile from "../../assets/images/two-line-mobile";

function SideBySideSection() {
  return (
    <section>
      <div className="lg:max-w-[1640px] max-w-[1200px] md:max-w-[700px] sm:max-w-[350px] mx-auto bg-[#fff9ea] px-4 py-16 lg:py-24 md:py-16 sm:py-8 md:px-8 lg:px-24">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-8 md:mb-5 sm:mb-4">
          <h1 className="text-montserrat text-[40px] lg:text-[60px] md:text-[30px] sm:text-[15px] font-semibold lg:mb-2 mb-2 md:mb-4 sm:mb-0 tracking-wide">
            READY TO BEGIN?
          </h1>
          <p className="text-[10px] lg:text-[40px] md:text-[20px] sm:text-[10px] italic tracking-wide font-playfair">
            just follow these easy steps:
          </p>
          <span className="flex justify-center">
            {window.matchMedia("(max-width: 767px)").matches ? (
              <CurveMobile />
            ) : (
              <CurveLine />
            )}
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-10 md:gap-15 sm:gap-0">
          <img
            src={sideSectionImage}
            alt="sidesection"
            className="sm:ms-16  max-w-[500px] h-full w-full sm:h-full sm:mb-3 sm:w-40 md:h-72 md:w-72 lg:h-full lg:w-full"
          />

          {/* Steps - Different layout for mobile and desktop */}
          <div className="lg:w-full md:w-[700px] sm:w-[350px] order-2 md:order-none">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[88] lg:left-[98px] md:left-[80px] sm:left-[73px] top-6 bottom-7 w-0.5 bg-black"></div>

              <div className="space-y-8 md:space-y-5 sm:space-y-4 sm:ml-[60px]">
                {/* Step 1 */}
                <div className="flex items-center md:items-start  gap-3 lg:gap-7 md:gap-5 sm:gap-2">
                  <div className="flex-shrink-0 w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-7 sm:h-7 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-[50px] lg:text-[50px] md:text-[30px] sm:text-[15px] z-10 tracking-widest">
                    <span className="lg:mb-[10px] md:mb-[6px] sm:mb-[4px]">
                      01
                    </span>
                  </div>
                  <div className="pt-1 md:pt-2 lg:mt-[20px]">
                    <h3 className="text-[25px] lg:text-[25px] md:text-[15px] sm:text-[10px] font-semibold uppercase tracking-wider">
                      Choose your service
                    </h3>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center md:items-start  gap-3 lg:gap-7 md:gap-5 sm:gap-2">
                  <div className="flex-shrink-0 w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-7 sm:h-7 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-[50px] lg:text-[50px] md:text-[30px] sm:text-[15px] z-10 tracking-widest">
                    <span className="lg:mb-[10px] md:mb-[6px] sm:mb-[4px]">
                      02
                    </span>
                  </div>
                  <div className="pt-1 md:pt-2 lg:mt-[20px]">
                    <h3 className="text-[25px] lg:text-[25px] md:text-[15px] sm:text-[10px] font-semibold uppercase tracking-wider">
                      Fill out the details
                    </h3>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center md:items-start  gap-3 lg:gap-7 md:gap-5 sm:gap-2">
                  <div className="flex-shrink-0 w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-7 sm:h-7 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-[50px] lg:text-[50px] md:text-[30px] sm:text-[15px] z-10 tracking-widest">
                    <span className="lg:mb-[20px] md:mb-[6px] sm:mb-[4px]">
                      03
                    </span>
                  </div>
                  <div>
                    <img
                      src={pay}
                      alt="pay"
                      className="lg:-ms-2 w-16 h-16 lg:w-16 lg:h-16 md:w-16 md:h-16 sm:h-8 sm:w-5 lg:-mt-5 md:-mt-6 sm:-mt-6 object-contain"
                    />
                    <h3 className="-mt-[10px] text-[25px] lg:text-[25px] md:text-[15px] sm:text-[10px] font-semibold uppercase tracking-wider">
                      Pay and confirm your session
                    </h3>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center md:items-start gap-3 lg:gap-7 md:gap-5 sm:gap-2">
                  <div className="flex-shrink-0 w-20 h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-7 sm:h-7 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-[50px] lg:text-[50px] md:text-[30px] sm:text-[15px] z-10 tracking-widest">
                    <span className="lg:mb-[20px] md:mb-[6px] sm:mb-[4px]">
                      04
                    </span>
                  </div>
                  <div className="pt-1 md:pt-2 lg:mt-[10px] flex items-center flex-wrap gap-0.5">
                    <div className="flex items-center">
                      <h3 className="text-[25px] lg:text-[25px] md:text-[15px] sm:text-[10px] font-semibold uppercase tracking-wider">
                        Receive a customised
                      </h3>
                      <span className="tracking-wider bg-[#94c8cb] ps-1 pe-2 lg:pe-7 md:pe-5 py-1 lg:py-2 md:py-1 sm:py-0 rounded-lg font-bold text-[25px] lg:text-[25px] md:text-[15px] sm:text-[10px]">
                        WELLNESS BOX
                      </span>
                    </div>
                    <img
                      src={wellnessbox}
                      alt="wellness"
                      className="lg:-mt-40 md:-mt-20 sm:-mt-[50px] md:-ms-20 sm:-ms-5 -ms-16 w-32 h-32 lg:w-32 lg:h-32 md:w-10 md:h-10 sm:h-10 sm:w-10 object-contain"
                    />
                    {window.matchMedia("(max-width: 767px)").matches ? (
                      <div className="absolute right-16 bottom-0"><TwoLineMobile /></div>
                    ) : (
                      <img
                        src={twoLines}
                        alt="lines"
                        className="me-[200px] mt-16 right-0 absolute"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get Started Button */}
      <div className="flex justify-center md:justify-center -mt-10">
        <button className="bg-[#efc345] text-black px-10 lg:px-10 md:px-6 sm:px-3 py-3 md:py-2 sm:py-0.5 lg:py-3 rounded-lg font-semibold text-[35px] lg:text-[35px] md:text-[20px] sm:text-[10px] hover:bg-[#E3B52D] transition-colors flex items-center gap-8 lg:gap-8 md:gap-5 sm:gap-2 hover:bg-black hover:text-[#efc345] sm:mt-7 lg:mt-0 md:mt-5">
          GET STARTED
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="transform transition-transform duration-300 group-hover:translate-x-1 w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] md:w-[20px] md:h-[20px] sm:w-[20px] sm:h-[20px]"
          >
            <path
              fill="currentColor"
              d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default SideBySideSection;
