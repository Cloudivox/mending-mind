import Footer from "../../components/footer";
import GoalSection from "../../components/goal-section";
import GrowthSection from "../../components/growth-section";
import HealingSection from "../../components/healing-section/healing-section";
import HeroSection from "../../components/hero-section";
import Navbar from "../../components/navbar";
import SideBySideSection from "../../components/side-by-side-section";
import TherapySection from "../../components/therapy-section";

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
      <Footer />
    </div>
  );
}

export default Home;
