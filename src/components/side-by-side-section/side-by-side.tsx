import pay from "../../assets/images/pay.png";
import wellnessbox from "../../assets/images/wellness-box.png";
import sideSectionImage from "../../assets/images/side-by-side-image.png";
import twoLines from "../../assets/images/two-lines.png";
import CurveLine from "../../assets/images/curve-line";

function SideBySideSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto bg-[#fff9ea] min-h-screen px-4 py-8 md:py-16 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-wide">
            READY TO BEGIN?
          </h1>
          <p className="text-3xl md:text-3xl font-normal italic tracking-wide font-playfair">
            just follow these easy steps:
          </p>
          <span className="flex justify-center">
            <CurveLine />
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-15">
          <img
            src={sideSectionImage}
            alt="sidesection"
            className="max-w-[500px]"
          />

          {/* Steps - Different layout for mobile and desktop */}
          <div className="lg:w-full md:w-1/2 order-2 md:order-none">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[28px] top-6 bottom-7 w-0.5 bg-black"></div>

              <div className="space-y-6 md:space-y-8">
                {/* Step 1 */}
                <div className="flex items-center md:items-start gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-16 h-16 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-3xl md:text-4xl z-10 tracking-widest">
                    <span className="mb-[10px]">01</span>
                  </div>
                  <div className="pt-1 md:pt-2 mt-[10px]">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
                      Choose your service
                    </h3>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center md:items-start gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-16 h-16 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-3xl md:text-4xl z-10 tracking-widest">
                    <span className="mb-[10px]">02</span>
                  </div>
                  <div className="pt-1 md:pt-2 mt-[10px]">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
                      Fill out the details
                    </h3>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center md:items-start gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-16 h-16 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-3xl md:text-4xl z-10 tracking-widest">
                    <span className="mb-[10px]">03</span>
                  </div>
                  <div>
                    <img
                      src={pay}
                      alt="pay"
                      className="w-14 h-14 md:w-14 md:h-14 -mt-10 object-contain"
                    />
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
                      Pay and confirm your session
                    </h3>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center md:items-start gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-16 h-16 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white font-playfair italic font-bold text-3xl md:text-4xl z-10 tracking-widest">
                    <span className="mb-[10px]">04</span>
                  </div>
                  <div className="pt-1 md:pt-2 mt-[10px] flex items-center flex-wrap gap-2 md:gap-3">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
                      Receive a customised
                    </h3>
                    <span className=" tracking-wide bg-[#94c8cb] px-2 md:px-3 py-0.5 md:py-1 rounded font-bold text-sm md:text-base">
                      WELLNESS BOX
                    </span>
                    <img
                      src={wellnessbox}
                      alt="wellness"
                      className="-mt-24 -ms-12 w-20 h-20 md:w-20 md:h-20 object-contain"
                    />
                    <img
                      src={twoLines}
                      alt="lines"
                      className="me-32 mt-12 right-0 absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get Started Button */}
      <div className="flex justify-center md:justify-center -mt-8">
        <button className="bg-[#efc345] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl hover:bg-[#E3B52D] transition-colors flex items-center gap-2 hover:bg-black hover:text-[#efc345]">
          GET STARTED
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transform transition-transform duration-300 group-hover:translate-x-1"
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
