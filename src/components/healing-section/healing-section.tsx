import { useState } from "react";
import VectorGrowth from "../../assets/images/vector-growth";
import Healing from "../../assets/images/healing";

const testimonials = [
  { text: "Truly a game-changer!", position: "left-[1%] top-[4%]" },
  { text: "Healing from hell to heaven.", position: "right-[1%] top-[7%]" },
  { text: "Safe, warm, and supportive.", position: "left-[-3%] top-[47%]" },
  { text: "A deeply enriching experience.", position: "right-[0%] top-[43%]" },
  {
    text: "Therapy brought me newfound clarity.",
    position: "left-[-3%] bottom-[20%]",
  },
  { text: "Mending Mind gave me hope.", position: "right-[30%] top-[-6%]" },
  {
    text: "Incredibly rewarding experience!",
    position: "left-[7%] bottom-[-5%]",
  },
  { text: "The best decision ever!", position: "right-[5%] bottom-[15%]" },
  {
    text: "Empowered and more confident!",
    position: "right-[10%] bottom-[0%]",
  },
];

export default function HealingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-end md:justify-end">
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 md:mt-0 md:mr-[-60px] mb-[60px] md:mb-[60px] lg:mb-[50px] relative">
            HEALING HAPPENS HERE!
          </h1>
          <span className="lg:-mb-16">
            <Healing />
          </span>
        </div>

        <p className="text-md md:text-base lg:text-lg text-center max-w-[280px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] mx-auto leading-relaxed text-gray-700 font-monterrat">
          When we say, 'We get you,' we truly mean it. Mending Mind isn't just a
          project—it's a vision that's personal, real, and rooted in the belief
          that no one should ever feel alone in their journey. Because everybody
          deserves the right kind of support, in the way that works best for
          them.
        </p>
      </div>
      <div className="relative w-full max-w-[850px] mx-auto px-4 py-8 overflow-hidden">
        {/* Background with soft gradient */}
        <div className="absolute inset-0" />

        {/* Main content container */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute ${
                testimonial.position
              } max-w-[200px] md:max-w-[300px] lg:max-w-[350px] rounded-lg p-3 shadow-sm transform z-10 transition-all duration-500 ease-in-out scale-content card-overlay ${
                hoveredIndex === index
                  ? "animate-background-shift"
                  : "bg-[#fff8e5]/80"
              }`}
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredIndex === index ? 20 : 10,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="text-md sm:text-base font-medium text-gray-800 transition-all duration-500 text-focus-animation whitespace-nowrap overflow-hidden text-ellipsis font-montserrat">
                {testimonial.text}
              </p>
            </div>
          ))}

          <div className="relative w-full pt-[61.64%]">
            <div className="absolute inset-0">
              <VectorGrowth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
