import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Button } from "../ui";

interface StoryCardOptionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const StoryCardOptions: React.FC<StoryCardOptionsProps> = ({
  onEdit,
  onDelete,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleEdit = () => {
    onEdit();
    setIsDropdownOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-600 hover:text-gray-900"
      >
        <SlOptions size={20} />
      </Button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <Button
            onClick={handleEdit}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 text-gray-700 hover:text-gray-900"
          >
            <FiEdit2 size={16} />
            <span>Edit</span>
          </Button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 w-full text-left px-4 py-2 transition-colors text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <FiTrash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryCardOptions;
