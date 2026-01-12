import React from "react";
import { FiCode } from "react-icons/fi";
import { useStories } from "../../hooks/useStories";
import SectionHeader from "./SectionHeader";
import CategoryItem from "./CategoryItem";
import { Button } from "../ui";
import { useGetCategories } from "../../queries";
import styles from "./Categories.module.css";

interface CategoriesProps {
  onCategoryChange?: (categoryName: string | null) => void;
  selectedCategory?: string | null;
  showClearButton?: boolean;
}

const Categories: React.FC<CategoriesProps> = ({
  onCategoryChange,
  selectedCategory: externalSelectedCategory,
  showClearButton = true,
}) => {
  const { categories, loading, error } = useGetCategories();
  const { filterByCategory, currentCategory } = useStories();
  const selectedCategory =
    externalSelectedCategory !== undefined
      ? externalSelectedCategory
      : currentCategory;

  const handleCategoryChange = onCategoryChange || filterByCategory;

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      handleCategoryChange(null);
    } else {
      handleCategoryChange(categoryName);
    }
  };

  if (error) {
    return (
      <div className={styles.container}>
        <SectionHeader Icon={FiCode} title="Categories" />
        <div className={styles.errorMessage}>Error loading categories</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SectionHeader Icon={FiCode} title="Categories" />

      {showClearButton && selectedCategory && (
        <div className={styles.clearButtonContainer}>
          <Button
            onClick={() => handleCategoryChange(null)}
            className={styles.clearButton}
          >
            Clear Filter
          </Button>
        </div>
      )}

      <div className={styles.categoryList}>
        {loading ? (
          <div className={styles.emptyMessage}>Loading Categories...</div>
        ) : categories.length === 0 ? (
          <div className={styles.emptyMessage}>No categories yet</div>
        ) : (
          categories.map((category) => (
            <CategoryItem
              key={category.categoryId}
              name={category.name}
              isSelected={selectedCategory === category.name}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
