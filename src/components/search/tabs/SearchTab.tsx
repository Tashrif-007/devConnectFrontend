import React from "react";
import TabButton from "../../ui/TabButton";

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
    <TabButton
      label={name}
      count={count}
      isActive={isActive}
      onClick={onClick}
      variant="search"
    />
  );
};

export default SearchTab;
