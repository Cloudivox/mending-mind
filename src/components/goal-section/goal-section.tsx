import line from "../../assets/images/goal-section-line.png";
import goal1 from "../../assets/images/goal-img-1.png";
import goal2 from "../../assets/images/goal-img-2.png";
import goal3 from "../../assets/images/goal-img-3.png";
import smilyIcon from "../../assets/images/smily-icon.png";

function GoalSection() {
  return (
    <div className="flex">
      <div className="container md:mx-auto md:px-4 md:py-16 md:mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center">
            <span className="mr-3">OUR</span>
            <span className="bg-[#99b5b4] px-2 py-1 rounded-md">GOAL</span>
            <span className="ml-3">IS SIMPLE</span>
          </p>

          <div className="relative">
            <p className="text-4xl lg:text-4xl md:text-3xl sm:text-xl font-playfair italic">
              prioritising <span className="font-normal not-italic">Your</span>{" "}
              Mental Health
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2">
              <img src={line} alt="line" />
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-6xl mx-auto">
            {/* First Row with Side Image */}
            <div className="flex flex-col md:flex-row items-end">
              <div className="md:w-1/4">
                <h2 className="text-2xl font-bold mb-2 font-montserrat">
                  All Inclusive?
                </h2>
                <p className="text-lg text-gray-700 relative inline-block font-montserrat">
                  Safe space for all.
                </p>
              </div>

              <div className="md:w-1/2">
                <div className="">
                  <img
                    src={goal1}
                    alt="Inclusive community"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Middle Image (positioned to the right) */}
              <div className="md:w-1/2 md:mt-12">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold mb-2 font-montserrat">
                    When? Where?
                  </h2>
                  <p className="text-lg text-gray-700 font-montserrat">
                    Meet us online or offline
                    <br />
                    in Mumbai.
                  </p>
                </div>
                <div className="">
                  <img
                    src={goal2}
                    alt="Confidential meetings"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Second Row with Center Image */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 text-left">
                <h2 className="text-2xl font-bold mb-2 font-montserrat">
                  100% Confidential?
                </h2>
                <p className="text-lg text-gray-700 gap-2 font-montserrat">
                  That goes without saying.
                </p>
              </div>

              <div className="md:w-1/2">
                <div className="">
                  <img
                    src={goal3}
                    alt="Professional support"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="md:w-1/3 text-center mt-10">
                <h2 className="text-2xl font-bold mb-2 relative inline-block font-montserrat mt-10">
                  Personalized Attention?
                </h2>
                <p className="text-lg text-gray-700 font-montserrat">
                  Above and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={smilyIcon}
        alt="icon"
        className="w-20 h-24 mt-48 lg:mt-48 md:mt-0 lg:me-24 me-24 md:me-0 hidden md:block"
      />
    </div>
  );
}

export default GoalSection;
