import line from "../../assets/images/goal-section-line.png";
import goal1 from "../../assets/images/goal-img-1.png";
import goal2 from "../../assets/images/goal-section-img2.png";
import goal3 from "../../assets/images/goal-section-img3.png";

function GoalSection() {
  return (
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
        <div className="max-w-7xl mx-auto">
          {/* First Row with Side Image */}
          <div className="flex flex-col md:flex-row items-end">
            <div className="md:w-1/4 -ms-[50px] mb-[200px]">
              <h2 className="text-2xl font-bold font-montserrat">
                All Inclusive?
              </h2>
              <p className="text-lg text-gray-700 relative inline-block font-montserrat">
                Safe space for all.
              </p>
            </div>

            <div className="md:w-1/2">
              <div className="-ms-[80px]">
                <img
                  src={goal1}
                  alt="Inclusive community"
                  className="w-[500px] h-[600px] object-cover rounded-2xl bg-[#fffae6]/60"
                />
              </div>
            </div>

            {/* Middle Image (positioned to the right) */}
            <div className="md:w-1/2 md:mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold font-montserrat">
                  When? Where?
                </h2>
                <p className="text-lg text-gray-700 font-montserrat">
                  Meet us online or offline
                  <br />
                  in Mumbai.
                </p>
              </div>
              <div>
                <div className=" bg-[#fffae6]/60 -mb-[100px] -ms-20 -px-10 rounded-[15%] z-[1]">
                  <img
                    src={goal2}
                    alt="Confidential meetings"
                    className="w-[500px] h-[600px] mt-[100px] rounded-2xl relative z-[1] bg-[#fffae6]/60"
                  />
                </div>
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
              <div className=" pt-10 p-5 bg-[#fffae6]/60 rounded-[15%]">
                <img
                  src={goal3}
                  alt="Professional support"
                  className="w-[400px] h-[500px] relative z-[1] object-cover rounded-2xl"
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
  );
}

export default GoalSection;
