import quote from "../../assets/images/quote-mark.png";
import curveLineSecond from "../../assets/images/curve-line-second.png";
import mobileInternsipCourses from "../../assets/images/internship-&-courses.svg";
import mobilePersonalTherapy from "../../assets/images/personal-therapy-mobile.svg";
import CurveMobile from "../../assets/images/curve-mobile.svg";

function TherapySection() {
  return (
    <>
      {window.matchMedia("(max-width: 767px)").matches ? (
        <div className="bg-[#efc345] pt-5 pb-10 ps-10 pe-10">
          <div className="max-w-2xl mx-auto relative">
             {/* Decorative quote mark */}
             <div className="absolute -top-8 -right-12 w-24 h-24 z-10">
              <img
                src={quote}
                alt=""
                className="w-[2rem] h-[2rem] object-contain opacity-80"
              />
            </div>
            {/* Header */}
            <div className="-ms-16 flex items-center justify-center mb-2">
              <div className="w-42 h-42 lg:w-56 lg:h-56 md:w-36 md:h-36 sm:w-20 sm:h-20 flex items-center justify-center p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Group_%20(1)-ovUamOfqfehAG76IXPf2k36C2VOOJf.svg"
                  alt="Thinking person illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-[15px] font-bold text-black tracking-wider font-monteserrat">
                  PROVIDING CARE
                </h1>
                <div className="flex justify-around items-center gap-8">
                  <p className="-me-[2rem] text-[10px] italic text-black font-playfair">
                    tailored to <span className="font-bold">Your</span> needs
                  </p>
                  <img
                    src={CurveMobile}
                    alt="line"
                    className="-me-[7rem] -mb-[3rem] h-10"
                  />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {/* Personal Therapy Card */}
              <div className="bg-[#f8f1eb] rounded-[15px] pl-3 gap-2 flex items-center overflow-hidden">
                <div className="w-28 h-28">
                  <div className="h-full md:h-full relative">
                    <img
                      src={mobilePersonalTherapy}
                      alt="Personal therapy illustration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-[8px] mb-1 tracking-wider font-montserrat">
                    Personal Therapy
                    <br />
                    Sessions
                  </h2>
                  <p className="text-[8px] mb-1 pr-2 font-primary-black tracking-wider font-montserrat">
                    For couples and individuals of all ages ( children, teens,
                    adult, seniors, couples)
                  </p>
                  <button className="bg-[#efc345] px-1 py-0.5 rounded-[4px] text-[6px] font-semibold flex items-center  hover:bg-[#e6b935] transition-colors">
                    KNOW MORE
                    <span className="text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
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
              <div className="bg-[#f8f1eb] rounded-[15px] pl-6 flex items-center overflow-hidden">
                <div className="flex-1">
                  <h2 className="font-bold text-[8px] mb-1 tracking-wider font-montserrat">
                    Wellness Programs <br /> for All Sectors
                  </h2>
                  <p className="text-[8px] mb-1 font-primary-black tracking-wider font-montserrat">
                    For corporates, schools, hospitals, NGOs, community clubs,
                    and more.
                  </p>
                  <button className="bg-[#efc345] px-1 py-0.5 rounded-[4px] text-[6px] font-semibold flex items-center  hover:bg-[#e6b935] transition-colors">
                    KNOW MORE
                    <span className="text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
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
                <div className="w-28 h-28">
                  <div className="h-full md:h-full relative mt-1">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(2)-aATuQpkEeTSLr55mz5wJ4hT83pYLLF.svg"
                      alt="Wellness programs illustration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Internships Card */}
              <div className="bg-[#f8f1eb] rounded-[15px] pl-3 gap-2 flex items-center overflow-hidden">
                <div className="w-28 h-28">
                  <div className="h-full md:h-full relative">
                    <img
                      src={mobileInternsipCourses}
                      alt="Internships illustration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-[8px] mb-1 tracking-wider font-montserrat">
                    Internships &<br /> Courses
                  </h2>
                  <p className="text-[8px] mb-1 pr-2 font-primary-black tracking-wider font-montserrat">
                    For curious learners and professionals aspiring to learn and
                    upskill.
                  </p>
                  <button className="bg-[#efc345] px-1 py-0.5 rounded-[4px] text-[6px] font-semibold flex items-center  hover:bg-[#e6b935] transition-colors">
                    KNOW MORE
                    <span className="text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
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
          </div>
        </div>
      ) : (
        <div className="relative w-full">
          {/* Container for the entire section including the quote */}
          <div className="max-w-[1600px] mx-auto relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-10 right-8 w-24 h-24 z-10">
              <img
                src={quote}
                alt=""
                className="w-full h-full object-contain opacity-80"
              />
            </div>

            <section className="bg-[#efc345] px-4 py-16 md:px-8 lg:px-20 relative overflow-hidden rounded-lg">
              {/* Header Section */}
              <div className="max-w-[1600px] mx-auto mb-16">
                <div className="-ms-[160px] flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                  <div className="w-42 h-42 lg:w-56 lg:h-56 md:w-44 md:h-44 flex items-center justify-center p-2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Group_%20(1)-ovUamOfqfehAG76IXPf2k36C2VOOJf.svg"
                      alt="Thinking person illustration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center md:text-center">
                    <h1 className="text-[55px] sm:text-3xl md:text-4xl lg:text-[60px] font-bold text-center font-bold text-black mb-2 tracking-wider">
                      PROVIDING CARE
                    </h1>
                    <div className="flex justify-around items-center">
                      <p className="-ms-24 mt-5 text-[40px] lg:text-[40px] md:text-3xl italic text-black font-playfair tracking-wide">
                        tailored to <span className="font-bold">Your</span>{" "}
                        needs
                      </p>
                      <img
                        src={curveLineSecond}
                        alt="line"
                        className="-me-[33rem] -mb-[14rem] h-32"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards Section */}
              <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-[60px] items-center justify-center min-h-[450px]">
                {/* Personal Therapy Card */}
                <div className="bg-[#f8f1eb] rounded-[50px] flex flex-col h-[650px] w-[380px] overflow-hidden">
                  <div className="h-3/4 pt-12">
                    <h2 className="text-[23px] font-bold mb-4 text-center font-montserrat tracking-wider">
                      PERSONAL THERAPY
                      <br />
                      SESSIONS
                    </h2>
                    <p className="text-center text-[20px] font-montserrat tracking-wider">
                      For couples and <br />
                      individuals of all ages
                      <br />
                      (children, teens, adults,
                      <br />
                      seniors, couples)
                    </p>
                  </div>
                  <div className="flex-1 flex justify-center items-center flex-col">
                    <div className="h-full md:h-full relative mt-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(1)-9GdEDzldplojPmyWZszgUozMp7wfjD.svg"
                        alt="Personal therapy illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <button className="relative top-[-105px] mb-5 bg-[#F4C430] text-black py-2.5 px-4 rounded-lg font-bold hover:bg-[#efc345] transition-colors flex items-center justify-center gap-2 font-montserrat hover:bg-black hover:text-[#efc345] tracking-wider z-[50] text-[18px]">
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
                <div className="bg-[#f8f1eb] rounded-[50px] flex flex-col h-[650px] w-[380px] overflow-hidden">
                  <div className="h-3/4 pt-12">
                    <h2 className="text-[23px] font-bold mb-4 text-center font-montserrat tracking-wider">
                      WELLNESS PROGRAMS
                      <br />
                      FOR ALL SECTORS
                    </h2>
                    <p className="text-center text-[20px] font-montserrat tracking-wider">
                      For corporates, schools,
                      <br />
                      hospitals, NGOs,
                      <br />
                      community clubs,
                      <br />
                      and more.
                    </p>
                  </div>
                  <div className="flex-1 flex justify-center items-center flex-col">
                    <div className="h-full md:h-full relative  mt-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(2)-aATuQpkEeTSLr55mz5wJ4hT83pYLLF.svg"
                        alt="Wellness programs illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <button className="relative top-[-75px] mb-5 bg-[#F4C430] text-black py-2.5 px-4 rounded-lg font-bold hover:bg-[#efc345] transition-colors flex items-center justify-center gap-2 font-montserrat hover:bg-black hover:text-[#efc345] tracking-wider z-[50] text-[18px]">
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
                <div className="bg-[#f8f1eb] rounded-[50px] flex flex-col h-[650px] w-[380px] overflow-hidden">
                  <div className="h-3/4 pt-12">
                    <h2 className="text-[23px] font-bold mb-4 text-center font-montserrat tracking-wider">
                      INTERNSHIPS &
                      <br />
                      COURSES
                    </h2>
                    <p className="text-center text-[20px] font-montserrat tracking-wider">
                      For interested
                      <br />
                      individuals and aspiring
                      <br />
                      professionals to learn
                      <br />
                      and grow
                    </p>
                  </div>
                  <div className="flex-1 flex justify-center items-center flex-col">
                    <div className="h-full md:h-full relative mt-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Clip%20Group_%20(3)-nPbxqO3fNLk5pXPQFCVBfCw9vmVXyv.svg"
                        alt="Internships illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <button className="relative top-[-35px] mb-5 bg-[#F4C430] text-black py-2.5 px-4 rounded-lg font-bold hover:bg-[#efc345] transition-colors flex items-center justify-center gap-2 font-montserrat hover:bg-black hover:text-[#efc345] tracking-wider z-[50] text-[18px]">
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
      )}
    </>
  );
}

export default TherapySection;
