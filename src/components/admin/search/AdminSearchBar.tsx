import React from "react";
import { FiPlus } from "react-icons/fi";
import { Button, InputField } from "../../ui";

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
  actionButtonLabel,
  onActionClick,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div>
        <InputField
          label=""
          name="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {actionButtonLabel && onActionClick && (
        <Button className="button" variant="primary" onClick={onActionClick}>
          <FiPlus size={18} className="mr-2" />
          {actionButtonLabel}
        </Button>
      )}
    </div>
  );
};

export default AdminSearchBar;
