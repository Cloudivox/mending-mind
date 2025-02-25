import { useCallback, useEffect, useState, useRef } from "react";

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
    return `translateX(-${currentIndex * (100 / 3)}%)`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center">
          <span className="mr-3">PROMISING</span>
          <span className="bg-[#99b5b4] text-white px-2 py-1 rounded-md">
            GROWTH
          </span>
        </p>

        <div className="relative">
          <p className="text-4xl lg:text-4xl md:text-3xl sm:text-xl font-playfair italic">
            since day One
          </p>
        </div>
      </div>

      <div
        className="relative max-w-4xl mx-auto px-12 my-20"
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
                className="flex-none w-1/3 px-2 transform transition-transform duration-500 hover:scale-105"
              >
                <div className="bg-[#b9e3e5] rounded-lg py-3 px-4 text-center shadow-lg hover:shadow-xl transition-all">
                  <span className="text-lg font-medium text-gray-800 uppercase">
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
            className="transform transition-transform duration-300 hover:scale-110"
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
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <path
              fill="currentColor"
              d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center">
        <button className="inline-flex items-center justify-between px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold text-l tracking-wide shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          GET TO KNOW US BETTER
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default GrowthSection;
