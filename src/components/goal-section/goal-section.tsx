import line from "../../assets/images/goal-section-line.png";
import heading from "../../assets/images/goal-section-heading.png";

function GoalSection() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
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
    </div>
  );
}

export default GoalSection;
