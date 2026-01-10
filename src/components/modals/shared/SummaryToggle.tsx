import React from "react";
import styles from './SummaryToggle.module.css';

interface SummaryToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const SummaryToggle: React.FC<SummaryToggleProps> = ({ enabled, onToggle }) => {
  return (
    <div className="border-t border-gray-200 pt-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? "bg-gray-900" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className="text-sm font-medium text-gray-900">
          Add summary to post
        </span>
      </div>
    </div>
  );
};

export default SummaryToggle;
