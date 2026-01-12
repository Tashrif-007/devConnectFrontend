import React from "react";
import StoryDetailContent from "./StoryDetailContent";
import StoryDetailActions from "./StoryDetailActions";
import styles from "./StoryDetailCard.module.css";
import type { Story } from "../../../interfaces";

interface StoryDetailCardProps {
  story: Story;
}

const StoryDetailCard: React.FC<StoryDetailCardProps> = ({ story }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        <StoryDetailContent story={story} />
        <StoryDetailActions story={story} />
      </div>
    </div>
  );
};

export default StoryDetailCard;
