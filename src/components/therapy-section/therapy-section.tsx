import quote from "../../assets/images/quote-mark.png";
import curveLineSecond from "../../assets/images/curve-line-second.png";

function TherapySection() {
  return (
    <div className="relative w-full">
      {/* Container for the entire section including the quote */}
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative quote mark */}
        <div className="absolute -top-10 right-8 w-24 h-24 z-10">
          <img
            src={quote}
            alt=""
            className="w-full h-full object-contain opacity-80"
          />
        </div>

        <section className="bg-[#efc345] min-h-screen px-4 py-16 md:px-8 lg:px-16 relative overflow-hidden rounded-lg">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
              <div className="w-42 h-42 md:w-44 md:h-44 flex items-center justify-center p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Group_%20(1)-ovUamOfqfehAG76IXPf2k36C2VOOJf.svg"
                  alt="Thinking person illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center md:text-center">
                <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center font-bold text-black mb-2 tracking-wide">
                  PROVIDING CARE
                </h1>
                <div className="flex justify-around">
                  <p className="text-2xl md:text-3xl italic text-black font-playfair tracking-wide">
                    tailored to <span className="font-bold">Your</span> needs
                  </p>
                  <img
                    src={curveLineSecond}
                    alt="line"
                    className="-me-80 -mb-96 h-32"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="-mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Personal Therapy Card */}
            <div className="bg-[#f8f1eb] rounded-3xl flex flex-col items-center justify-center h-full">
              <div className="flex-1 p-6 md:p-8">
                <h2 className="text-md md:text-lg font-bold mb-4 text-center font-montserrat tracking-wide">
                  PERSONAL THERAPY
                  <br />
                  SESSIONS
                </h2>
                <p className="text-center text-sm md:text-base font-montserrat tracking-wide">
                  For couples <br />
                  and individuals of all ages
                  <br />
                  (children, teens, adults,
                  <br />
                  seniors, couples)
                </p>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <div className="h-full md:h-full relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(1)-9GdEDzldplojPmyWZszgUozMp7wfjD.svg"
                    alt="Personal therapy illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button className="absolute bottom-20 mb-5 bg-[#F4C430] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#efc345] transition-colors flex items-center justify-center gap-2 font-montserrat hover:bg-black hover:text-[#efc345] tracking-wide">
                  KNOW MORE
                  <span className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="transform transition-transform duration-300 hover:scale-110"
                    >
                      <path
                        fill="currentColor"
                        d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Wellness Programs Card */}
            <div className="bg-[#f8f1eb] rounded-3xl flex flex-col items-center justify-center h-full">
              <div className="flex-1  p-6 md:p-8">
                <h2 className="text-md md:text-lg font-bold mb-4 text-center font-montserrat tracking-wide">
                  WELLNESS PROGRAMS
                  <br />
                  FOR ALL SECTORS
                </h2>
                <p className="text-center text-sm md:text-base font-montserrat tracking-wide">
                  For corporates, schools,
                  <br />
                  hospitals, NGOs,
                  <br />
                  community clubs,
                  <br />
                  and more.
                </p>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <div className="h-full md:h-full relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(2)-aATuQpkEeTSLr55mz5wJ4hT83pYLLF.svg"
                    alt="Wellness programs illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button className="absolute bottom-20 mb-5 bg-[#F4C430] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#efc345] transition-colors flex items-center justify-center gap-2 font-montserrat hover:bg-black hover:text-[#efc345] tracking-wide">
                  KNOW MORE
                  <span className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="transform transition-transform duration-300 hover:scale-110"
                    >
                      <path
                        fill="currentColor"
                        d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Internships Card */}
            <div className="bg-[#f8f1eb] rounded-3xl flex flex-col items-center justify-center h-full">
              <div className="flex-1 p-6 md:p-8">
                <h2 className="text-md md:text-lg font-bold mb-4 text-center font-montserrat tracking-wide">
                  INTERNSHIPS &
                  <br />
                  COURSES
                </h2>
                <p className="text-center text-sm md:text-base font-montserrat tracking-wide">
                  For interested
                  <br />
                  individuals and aspiring
                  <br />
                  professionals to learn
                  <br />
                  and grow
                </p>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <div className="h-full md:h-full relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(3)-nPbxqO3fNLk5pXPQFCVBfCw9vmVXyv.svg"
                    alt="Internships illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button className="absolute bottom-20 mb-5 bg-[#F4C430] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#efc345] transition-colors flex items-center justify-center gap-2 font-montserrat hover:bg-black hover:text-[#efc345] tracking-wide">
                  KNOW MORE
                  <span className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="transform transition-transform duration-300 hover:scale-110"
                    >
                      <path
                        fill="currentColor"
                        d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TherapySection;
