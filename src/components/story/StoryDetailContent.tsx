import React from "react";
import PostAuthor from "../modals/PostAuthor";
import PostTitle from "../modals/PostTitle";
import PostTags from "../modals/PostTags";
import PostBody from "../modals/PostBody";
import PostSummary from "../modals/PostSummary";
import type { Story } from "../../types";

interface StoryDetailContentProps {
  story: Story;
}

const StoryDetailContent: React.FC<StoryDetailContentProps> = ({ story }) => {
  return (
    <div className="space-y-6">
      <PostAuthor user={story.user} createdAt={story.createdAt} />
      <PostTitle title={story.title} className="text-3xl" />
      <PostTags tags={story.categoryNames} />
      <div className="border-t border-gray-200"></div>
      <PostBody body={story.body} />
      {story.summary && <PostSummary summary={story.summary} />}
    </div>
  );
};

export default StoryDetailContent;
