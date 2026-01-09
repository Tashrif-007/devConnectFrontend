import React from "react";
import { Button } from "../ui";

interface SearchTabProps {
  name: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const SearchTab: React.FC<SearchTabProps> = ({
  name,
  count,
  isActive,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className={`px-4 py-3 font-medium transition-colors relative whitespace-nowrap ${
        isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {name}
      <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded">
        {count}
      </span>
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
      )}
    </Button>
  );
};

export default SearchTab;
