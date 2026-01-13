interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className={styles['feature-card-container']}>
      <div className={styles['feature-card-header']}>
        <div className={styles['feature-card-icon']}>{icon}</div>
      </div>

      <div className="relative z-10">
        <div className={styles['feature-card-content']}>
          {icon}
        </div>
        <h4 className={styles['feature-card-title']}>
          {title}
        </h4>
        <p className={styles['feature-card-description']}>
          {description}
        </p>
      </div>
    </div>
  );
}
