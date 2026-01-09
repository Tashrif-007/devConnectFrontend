import React from "react";
import type { Story } from "../types";
import StoryCard from "../components/story/StoryCard";
import StoryCardSkeleton from "../components/story/StoryCardSkeleton";
import EmptyStories from "../components/story/EmptyStories";

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
        <h2 className="text-xl font-bold text-gray-900 mb-6">Posted Stories</h2>
        <StoryCardSkeleton count={3} />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">
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
