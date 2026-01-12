import React, { useState } from "react";
import styles from "./PostSummary.module.css";

interface PostSummaryProps {
  summary: string;
}

const PostSummary: React.FC<PostSummaryProps> = ({ summary }) => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Summary</h3>
        <button
          onClick={() => setShowSummary(!showSummary)}
          className={styles.toggleButton}
        >
          {showSummary ? "Hide" : "Show"}
        </button>
      </div>
      {showSummary && (
        <div className={styles.content}>
          <p className={styles.text}>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default PostSummary;
