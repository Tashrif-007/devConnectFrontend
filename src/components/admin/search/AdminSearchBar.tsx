import React from "react";
import { InputField } from "../../ui";

interface AdminSearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
  actionButtonLabel?: string;
  onActionClick?: () => void;
}

const AdminSearchBar: React.FC<AdminSearchBarProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search...",
}) => {
  return (
    <InputField
      label=""
      name="search"
      placeholder={placeholder}
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default AdminSearchBar;
