import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CategoryItem.module.css";

interface CategoryItemProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  isSelected,
  onClick,
}) => {
  const containerClass = `${styles.container} ${
    isSelected ? styles.containerSelected : styles.containerUnselected
  }`;
  const nameClass = `${styles.name} ${
    isSelected ? styles.nameSelected : styles.nameUnselected
  }`;

  return (
    <div onClick={onClick} className={containerClass}>
      <div>
        <span className={nameClass}>#{name}</span>
      </div>
      <span className={styles.arrowIcon}>
        <FiArrowRight />
      </span>
    </div>
  );
};

export default CategoryItem;
