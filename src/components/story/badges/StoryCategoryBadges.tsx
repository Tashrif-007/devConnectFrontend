import React from "react";
import styles from "./StoryCategoryBadges.module.css";

interface StoryCategoryBadgesProps {
  categories: string[];
}

const StoryCategoryBadges: React.FC<StoryCategoryBadgesProps> = ({
  categories,
}) => {
  return (
    <div className={styles.container}>
      {categories.map((category, idx) => (
        <span key={idx} className={styles.badge}>
          {category}
        </span>
      ))}
    </div>
  );
};

export default StoryCategoryBadges;
