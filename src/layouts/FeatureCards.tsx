import FeatureCard from "../components/features/FeatureCard";
import { features } from "../constants/index";
import styles from "./FeatureCards.module.css";

export default function FeatureCards() {
  return (
    <section className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Everything you need to grow.
          </h2>
          <p className={styles.description}>
            We've crafted a suite of tools specifically designed for the modern
            developer workflow.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
