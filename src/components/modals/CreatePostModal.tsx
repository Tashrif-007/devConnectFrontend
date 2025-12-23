import React from "react";
import { FiX } from "react-icons/fi";
import CreatePostForm from "./CreatePostForm";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white border-1 rounded-lg w-full max-w-2xl max-h-[85vh] flex flex-col">
        <div className="flex-shrink-0 sticky top-0 bg-white border-b border-gray-200 rounded-t-lg px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Create New Post</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <FiX size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <CreatePostForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
