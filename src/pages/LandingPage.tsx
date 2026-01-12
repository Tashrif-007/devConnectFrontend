import HeroSection from "../components/hero/HeroSection";
import FeatureCards from "../layouts/FeatureCards";
import RecentPosts from "../layouts/RecentPosts";
import Footer from "../components/footer/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <main className="grow">
        <HeroSection />
        <FeatureCards />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}
