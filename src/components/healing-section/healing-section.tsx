import { useEffect, useState } from "react";
import VectorGrowth from "../../assets/images/vector-growth";
import Healing from "../../assets/images/healing";

const testimonials = [
  { text: "Truly a game-changer!", position: "left-[1%] top-[4%]" },
  { text: "Healing from hell to heaven.", position: "right-[1%] top-[7%]" },
  { text: "Safe, warm, and supportive.", position: "left-[6%] top-[35%]" },
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
const laptopPositions = [
  "left-[1%] top-[4%]",
  "right-[1%] top-[5%]",
  "left-[6%] top-[35%]",
  "right-[2%] bottom-[40%]",
  "left-[4%] bottom-[35%]",
];

const mobilePositions = ["left-[5%] top-[-10%]", "right-[5%] bottom-[15%]"];

export default function HealingSection() {
  const [currentSet, setCurrentSet] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [numTestimonials, setNumTestimonials] = useState(5);

  const [positions, setPositions] = useState(laptopPositions);

  useEffect(() => {
    const updateTestimonials = () => {
      if (window.innerWidth < 768) {
        setNumTestimonials(2); // Show 2 testimonials on mobile
        setPositions(mobilePositions); // Use mobile positions
      } else {
        setNumTestimonials(5); // Show 5 testimonials on laptop
        setPositions(laptopPositions); // Use laptop positions
      }
    };
    updateTestimonials();
  }, []);

  const currentTestimonials =
    currentSet === 0
      ? testimonials.slice(0, numTestimonials)
      : testimonials.slice(5, 5 + numTestimonials);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);

      setTimeout(() => {
        setCurrentSet((prev) => (prev === 0 ? 1 : 0));
        setIsBlinking(false);
      }, 300); // Increased blink duration for smoother effect
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full max-w-[1300px] lg:max-w-[1300px] md:max-w-[600px] sm:max-w-[340px] mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-8 md:p-5 sm:p-2 md:py-12 lg:py-16">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-end md:justify-end">
          <h1 className="text-5xl sm:text-sm md:text-2xl lg:text-5xl font-bold text-center mt-4 md:mt-0 md:mr-[-60px] mb-[60px] md:mb-[60px] lg:mb-[50px] sm:mb-2 relative tracking-wide font-montserrat">
            HEALING HAPPENS HERE!
          </h1>
          <span className="lg:-mb-16 sm:-mb-10 md:-mb-8">
            <Healing />
          </span>
        </div>

        <p className="text-[25px] lg:text-[25px] md:text-sm sm:text-[9px] md:text-base lg:text-lg text-center max-w-[900px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1000px] mx-auto leading-relaxed text-gray-700 font-monterrat tracking-wide font-montserrat whitespace-pre-line">
          When we say, 'We get you,' we truly mean it. Mending Mind isn't just a
          project—it's a vision that's personal, real, and rooted in the belief
          that no one should ever feel alone in their journey. Because everybody
          deserves the right kind of support, in the way that works best for
          them.
        </p>
      </div>
      <div className="relative w-full max-w-[1000px] lg:max-w-[1200px] md:max-w-[600px] sm:max-w-[340px] mx-auto px-4 py-8 overflow-hidden">
        {/* Background with soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent" />

        {/* Main content container */}
        <div className="relative">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute ${positions[index]} 
                max-w-[100px] md:max-w-[300px] sm:max-w-[300px] lg:max-w-[500px] 
                rounded-lg lg:p-4 md:p-3 sm:p-2 p-2 shadow-lg transform z-10 
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
                className={`text-md lg:text-xl md:text-sm sm:text-[8px] font-medium text-gray-800 
                transition-all duration-500 whitespace-nowrap overflow-hidden 
                text-ellipsis font-montserrat tracking-wide
                ${isBlinking ? "blur-sm" : ""}`}
              >
                {testimonial.text}
              </p>
            </div>
          ))}

          <div className="relative w-full pt-[61.64%]">
            <div className="absolute inset-0 h-[500px] lg:h-[500px] md:h-[300px] sm:h-[150px]">
              <VectorGrowth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
