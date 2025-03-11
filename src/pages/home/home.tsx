import Footer from "../../components/footer";
import GoalSection from "../../components/goal-section";
import GrowthSection from "../../components/growth-section";
import HealingSection from "../../components/healing-section/healing-section";
import HeroSection from "../../components/hero-section";
import Navbar from "../../components/navbar";
import SideBySideSection from "../../components/side-by-side-section";
import TherapySection from "../../components/therapy-section";
import smilyIcon from "../../assets/images/smily-icon.png";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GoalSection />
      <TherapySection />
      <GrowthSection />
      <SideBySideSection />
      <HealingSection />
      <img
        src={smilyIcon}
        alt="icon"
        className="z-[9999] fixed bottom-10 right-10 w-14 h-14 md:w-16 md:h-16 cursor-pointer hover:scale-110 transition-transform"
      />

      <Footer />
    </div>
  );
}

export default Home;
