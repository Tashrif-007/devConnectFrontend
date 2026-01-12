import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Button } from "../../ui";
import styles from "./StoryCardOptions.module.css";

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
    <div className={styles.container}>
      <Button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={styles.optionsButton}
      >
        <SlOptions size={20} />
      </Button>

      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <Button onClick={handleEdit} className={styles.editButton}>
            <FiEdit2 size={16} />
            <span>Edit</span>
          </Button>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <FiTrash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryCardOptions;
