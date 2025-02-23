import Footer from "../../components/footer";
import GoalSection from "../../components/goal-section";
import HeroSection from "../../components/hero-section";
import Navbar from "../../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GoalSection />
      <Footer />
    </div>
  );
}

export default Home;
