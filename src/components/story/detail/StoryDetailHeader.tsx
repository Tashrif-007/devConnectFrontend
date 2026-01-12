import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./StoryDetailHeader.module.css";

interface StoryDetailHeaderProps {
  onBack?: () => void;
}

const StoryDetailHeader: React.FC<StoryDetailHeaderProps> = ({ onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <button onClick={handleBack} className={styles.backButton}>
      <FiArrowLeft size={20} />
      Back
    </button>
  );
};

export default StoryDetailHeader;
