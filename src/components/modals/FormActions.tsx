import React from "react";

interface FormActionsProps {
  loading: boolean;
  onCancel: () => void;
  onPublish: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({
  loading,
  onCancel,
  onPublish,
}) => {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
      <button
        type="button"
        onClick={onCancel}
        disabled={loading}
        className="px-6 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onPublish}
        disabled={loading}
        className="px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        {loading ? "Publishing..." : "Publish Post"}
        {!loading && <span>➜</span>}
      </button>
    </div>
  );
};

export default FormActions;
