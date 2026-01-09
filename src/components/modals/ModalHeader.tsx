import React from "react";
import { FiX } from "react-icons/fi";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="shrink-0 sticky top-0 bg-white border-b border-gray-200 rounded-t-lg px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <button
        onClick={onClose}
        className="p-1 hover:bg-gray-100 rounded transition-colors"
      >
        <FiX size={24} className="text-gray-500" />
      </button>
    </div>
  );
};

export default ModalHeader;
