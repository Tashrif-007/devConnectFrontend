import React from "react";
import styles from "./SummaryToggle.module.css";

interface SummaryToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const SummaryToggle: React.FC<SummaryToggleProps> = ({ enabled, onToggle }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["toggle-container"]}>
        <button
          type="button"
          onClick={onToggle}
          className={
            enabled
              ? styles["toggle-button-enabled"]
              : styles["toggle-button-disabled"]
          }
        >
          <span
            className={
              enabled
                ? styles["toggle-indicator-enabled"]
                : styles["toggle-indicator-disabled"]
            }
          />
        </button>
        <span className={styles["toggle-label"]}>Add summary to post</span>
      </div>
    </div>
  );
};

export default SummaryToggle;
