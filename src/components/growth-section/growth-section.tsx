import { useCallback, useEffect, useState } from "react";

function GrowthSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    { text: "6 Years" },
    { text: "4.9/5 Stars" },
    { text: "3000+ Sessions" },
    { text: "24/7 Support" },
    { text: "100% Success" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % cards.length);
  }, [cards.length]);
  console.log(currentIndex, "c");

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? cards.length - 1 : current - 1
    );
  }, [cards.length]);

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Rotate every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

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
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {/* Duplicate the cards array to create the illusion of infinite scroll */}
            {[...cards].map(
              (card, index) => (
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
              )
            )}
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
    </div>
  );
}

export default GrowthSection;
