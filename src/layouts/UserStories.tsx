import React from "react";
import StoryCard from "../components/story/card/StoryCard";
import StoryCardSkeleton from "../components/story/card/StoryCardSkeleton";
import EmptyStories from "../components/story/shared/EmptyStories";
import type { Story } from "../interfaces";
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
        <h2 className={styles.title}>Posted Stories</h2>
        <StoryCardSkeleton count={3} />
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.title}>
        Posted Stories ({stories.length})
      </h2>

      {stories.length === 0 ? (
        <EmptyStories />
      ) : (
        <div className="space-y-4">
          {stories.map((story) => (
            <StoryCard key={story.storyId} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserStories;
