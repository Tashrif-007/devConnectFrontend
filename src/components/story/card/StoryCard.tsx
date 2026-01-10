import React from "react";
import { useNavigate } from "react-router-dom";
import type { Story } from "../../../types";
import { formatDate, truncateText } from "../../../utils/stringUtils";
import StoryCategoryBadges from "../badges/StoryCategoryBadges";
import styles from "./StoryCard.module.css";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/stories/${story.storyId}`)}
      className={styles.card}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{story.title}</h3>
        <span className={styles.date}>{formatDate(story.createdAt)}</span>
      </div>

      {story.categoryNames && story.categoryNames.length > 0 && (
        <StoryCategoryBadges categories={story.categoryNames} />
      )}

      <p className={styles.body}>
        {truncateText(story.summary || story.body, 300)}
      </p>

      <div className={styles.actionContainer}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/story/${story.storyId}`);
          }}
          className={styles.readMoreButton}
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
