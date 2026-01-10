import React, { useState } from "react";
import styles from './PostSummary.module.css';

interface PostSummaryProps {
  summary: string;
}

const PostSummary: React.FC<PostSummaryProps> = ({ summary }) => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Summary</h3>
        <button
          onClick={() => setShowSummary(!showSummary)}
          className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors px-2 py-1 hover:bg-blue-50 rounded"
        >
          {showSummary ? "Hide" : "Show"}
        </button>
      </div>
      {showSummary && (
        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default PostSummary;
