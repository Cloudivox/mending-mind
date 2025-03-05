import { useEffect, useState } from "react";
import VectorGrowth from "../../assets/images/vector-growth";
import Healing from "../../assets/images/healing";

const testimonials = [
  { text: "Truly a game-changer!", position: "left-[1%] top-[4%]" },
  { text: "Healing from hell to heaven.", position: "right-[1%] top-[7%]" },
  { text: "Safe, warm, and supportive.", position: "left-[-3%] top-[47%]" },
  {
    text: "A deeply enriching experience.",
    position: "right-[0%] bottom-[13%]",
  },
  {
    text: "Therapy brought me newfound clarity.",
    position: "left-[-4%] bottom-[18%]",
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
const positions = [
  "left-[1%] top-[4%]",
  "right-[1%] top-[7%]",
  "left-[-3%] top-[47%]",
  "right-[0%] bottom-[13%]",
  "left-[-4%] bottom-[18%]",
];

export default function HealingSection() {
  const [currentSet, setCurrentSet] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentTestimonials =
    currentSet === 0 ? testimonials.slice(0, 5) : testimonials.slice(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);

      setTimeout(() => {
        setCurrentSet((prev) => (prev === 0 ? 1 : 0));
        setIsBlinking(false);
      }, 300); // Increased blink duration for smoother effect
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-end md:justify-end">
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 md:mt-0 md:mr-[-60px] mb-[60px] md:mb-[60px] lg:mb-[50px] relative tracking-wide">
            HEALING HAPPENS HERE!
          </h1>
          <span className="lg:-mb-16">
            <Healing />
          </span>
        </div>

        <p className="text-md md:text-base lg:text-lg text-center max-w-[280px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] mx-auto leading-relaxed text-gray-700 font-monterrat tracking-wide">
          When we say, 'We get you,' we truly mean it. Mending Mind isn't just a
          project—it's a vision that's personal, real, and rooted in the belief
          that no one should ever feel alone in their journey. Because everybody
          deserves the right kind of support, in the way that works best for
          them.
        </p>
      </div>
      <div className="relative w-full max-w-[850px] mx-auto px-4 py-8 overflow-hidden">
        {/* Background with soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent" />

        {/* Main content container */}
        <div className="relative">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute ${positions[index]} 
                max-w-[100px] md:max-w-[300px] lg:max-w-[350px] 
                rounded-lg p-4 shadow-lg transform z-10 
                transition-all duration-500 ease-in-out 
                testimonial-card bg-[#fff8e5]/80
                ${isBlinking ? "testimonial-blink" : ""}
                ${hoveredIndex === index ? "scale-105 shadow-xl" : ""}`}
              style={{
                zIndex: hoveredIndex === index ? 20 : 10,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p
                className={`text-md sm:text-base font-medium text-gray-800 
                transition-all duration-500 whitespace-nowrap overflow-hidden 
                text-ellipsis font-sans tracking-wide
                ${isBlinking ? "blur-sm" : ""}`}
              >
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
