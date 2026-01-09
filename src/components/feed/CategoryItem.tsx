import React from "react";
import { FiArrowRight } from "react-icons/fi";

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
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between py-2.5 px-3 rounded cursor-pointer transition-colors ${
        isSelected
          ? "bg-gray-100 border border-gray-300 rounded-lg"
          : "hover:bg-gray-50"
      }`}
    >
      <div>
        <span
          className={`text-sm ${
            isSelected ? "text-gray-900 font-semibold" : "text-gray-700"
          }`}
        >
          #{name}
        </span>
      </div>
      <span className="text-gray-400 text-xs">
        <FiArrowRight />
      </span>
    </div>
  );
};

export default CategoryItem;
