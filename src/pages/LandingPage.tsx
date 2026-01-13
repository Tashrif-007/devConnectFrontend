import HeroSection from "../components/hero/HeroSection";
import FeatureCards from "../layouts/FeatureCards";
import RecentPosts from "../layouts/RecentPosts";
import Footer from "../components/footer/Footer";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <main className="grow">
        <HeroSection />
        <FeatureCards />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}
