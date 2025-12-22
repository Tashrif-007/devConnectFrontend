import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import FeatureCards from "../components/features/FeatureCards";
import RecentPosts from "../components/recent-posts/RecentPosts";
import Footer from "../components/footer/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}
