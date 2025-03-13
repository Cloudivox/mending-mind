import { useCallback, useEffect, useState, useRef } from "react";
import GrowthSectionHeadingImg from "../../assets/images/growth-section-heading-img.png";

function GrowthSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const totalSlides = useRef(0);

  const cards = [
    { text: "6 Years" },
    { text: "4.9/5 Stars" },
    { text: "3000+ Sessions" },
    { text: "24/7 Support" },
    { text: "100% Success" },
  ];

  // We need actual indices that don't reset
  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => current + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) => current - 1);
  }, []);

  // Handle the infinite scrolling
  useEffect(() => {
    // We need to add a special case when we've gone through all slides
    if (currentIndex >= cards.length * 2) {
      // We disable transition temporarily, then jump back while maintaining visual position
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(currentIndex - cards.length);

        // Re-enable transition after the position reset
        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 700); // This should match your transition duration
    }

    // Handle going backwards
    if (currentIndex < 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(currentIndex + cards.length);

        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 700);
    }
  }, [currentIndex, cards.length]);

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000); // Rotate every 2 seconds as requested

      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  // Initialize with duplicated cards for seamless looping
  useEffect(() => {
    // Start from the first set of cards in our duplicated array
    setCurrentIndex(cards.length);
    totalSlides.current = cards.length * 3;
  }, [cards.length]);

  // Calculate the transform value
  const getTransformValue = () => {
    const screenWidth = window.innerWidth;
    let visibleCards;

    if (screenWidth < 640) {
      visibleCards = 1; // Mobile: 1 card at a time
    } else if (screenWidth < 1024) {
      visibleCards = 2; // Tablet: 2 cards at a time
    } else {
      visibleCards = 3; // Laptop/Desktop: 3 cards at a time
    }

    return `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  };

  return (
    <div className="px-4 py-8 md:py-12 overflow-hidden">
      <img
        src={GrowthSectionHeadingImg}
        alt="heading-img"
        className="block w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] ml-auto -mr-12 lg:-mr-12 md:-mr-10 sm:-mr-7"
      />
      <div
        className="relative mx-auto px-16 my-10 lg:my-10 md:my-8 sm:my-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className={`flex ${
              transitionEnabled
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }`}
            style={{ transform: getTransformValue() }}
          >
            {/* Create a looping effect by having three sets of cards */}
            {[...cards, ...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-full md:w-1/2 lg:w-1/3 px-5 transform transition-transform duration-500 hover:scale-105"
              >
                <div className="bg-[#b9e3e5] rounded-lg py-8 px-4 lg:py-8 lg:px-4 md:py-5 md:px-2 sm:py-1 sm:px-0.5 text-center shadow-lg hover:shadow-xl transition-all">
                  <span className="text-[30px] lg:text-[30px] md:text-[20px] sm:text-[10px] font-bold text-gray-800 uppercase tracking-wide">
                    {card.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 transition-all duration-300 text-gray-600 hover:text-gray-800 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="transform transition-transform duration-300 hover:scale-110 h-16 w-16 md:h-12 md:w-12 sm:h-6 sm:w-6 lg:h-16 lg:w-16"
          >
            <path
              fill="currentColor"
              d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 transition-all duration-300 text-gray-600 hover:text-gray-800 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="transform transition-transform duration-300 hover:scale-110 h-16 w-16 md:h-12 md:w-12 sm:h-6 sm:w-6 lg:h-16 lg:w-16"
          >
            <path
              fill="currentColor"
              d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center my-32 lg:my-32 md:my-20 sm:my-5">
        <button className="bg-[#efc345] text-black px-10 lg:px-10 md:px-6 sm:px-3 py-3 md:py-2 sm:py-0.5 lg:py-3 rounded-lg font-semibold text-[35px] lg:text-[35px] md:text-[20px] sm:text-[10px] hover:bg-[#E3B52D] transition-colors flex items-center gap-8 lg:gap-8 md:gap-5 sm:gap-2 hover:bg-black hover:text-[#efc345]">
          GET TO KNOW US BETTER
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
    </div>
  );
}

export default GrowthSection;
