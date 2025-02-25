import Footer from "../../components/footer";
import GoalSection from "../../components/goal-section";
import GrowthSection from "../../components/growth-section";
import HealingSection from "../../components/healing-section/healing-section";
import HeroSection from "../../components/hero-section";
import Navbar from "../../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GoalSection />
      <GrowthSection />
      <HealingSection/>
      <Footer />
    </div>
  );
}

export default Home;
