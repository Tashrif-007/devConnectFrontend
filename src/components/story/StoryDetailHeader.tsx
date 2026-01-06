import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

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
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
    >
      <FiArrowLeft size={20} />
      Back
    </button>
  );
};

export default StoryDetailHeader;
