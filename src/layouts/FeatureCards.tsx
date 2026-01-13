import FeatureCard from "../components/features/FeatureCard";
import { features, FEATURE_CARDS } from "../constants/index";
import styles from "./FeatureCards.module.css";

export default function FeatureCards() {
  return (
    <section className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <h2 className={styles.title}>{FEATURE_CARDS.TITLE}</h2>
          <p className={styles.description}>{FEATURE_CARDS.DESCRIPTION}</p>
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
