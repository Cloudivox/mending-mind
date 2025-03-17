import GoalSectionImg from "../../assets/images/goal-section-img.png";

function GoalSection() {
  return (
    <div className="sm:mt-3 flex justify-center items-center lg:mb-24 mb-24 sm:mb-10 md:mb-24">
      <img
        src={GoalSectionImg}
        alt="goal-section"
        className="w-[1200px] lg:w-[1200px] md:w-[700px] sm:w-[300px] h-full sm:p-42 lg:p-0 md:p-24 p-0"
      />
    </div>
  );
}

export default GoalSection;
