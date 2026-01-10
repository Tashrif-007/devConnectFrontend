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
        <div className="text-red-500 text-sm">Error loading categories</div>
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
            className="w-full py-2 px-3 text-sm font-semibold text-white rounded-lg bg-black hover:bg-black/80 transition-colors"
          >
            Clear Filter
          </Button>
        </div>
      )}

      <div className={styles.categoryList}>
        {loading ? (
          <div className="text-gray-500 text-sm">Loading Categories...</div>
        ) : categories.length === 0 ? (
          <div className="text-gray-500 text-sm">No categories yet</div>
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
