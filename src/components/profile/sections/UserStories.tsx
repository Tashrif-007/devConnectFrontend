import React from "react";
import type { Story } from "../../../types";
import StoryCard from "../../story/card/StoryCard";
import StoryCardSkeleton from "../../story/card/StoryCardSkeleton";
import EmptyStories from "../../story/shared/EmptyStories";
import styles from "./UserStories.module.css";

interface UserStoriesProps {
  stories: Story[];
  loading?: boolean;
}

const UserStories: React.FC<UserStoriesProps> = ({
  stories,
  loading = false,
}) => {
  if (loading) {
    return (
      <div>
        <h2 className={styles.heading}>Posted Stories</h2>
        <StoryCardSkeleton count={3} />
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.heading}>Posted Stories ({stories.length})</h2>

      {stories.length === 0 ? (
        <EmptyStories />
      ) : (
        <div className={styles.container}>
          {stories.map((story) => (
            <StoryCard key={story.storyId} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserStories;
