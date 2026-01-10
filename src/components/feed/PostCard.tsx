import React from "react";
import type { Story } from "../../types";
import PostCardHeader from "./PostCardHeader";
import PostCardContent from "./PostCardContent";
import PostCardTags from "./PostCardTags";
import PostCardActions from "./PostCardActions";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  story: Story;
}

const PostCard: React.FC<PostCardProps> = ({ story }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/stories/${story.storyId}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-gray-300"
    >
      <PostCardHeader user={story.user} createdAt={story.createdAt} />
      <PostCardContent title={story.title} body={story.body} />
      <div className="flex justify-between pt-4 border-t border-gray-100">
        <PostCardTags tags={story.categoryNames} />
        <PostCardActions
          storyId={story.storyId}
          upvotes={story.votes.upvotes}
          downvotes={story.votes.downvotes}
          userVote={story.votes.userVote}
          commentsCount={story.comments?.length || 0}
        />
      </div>
    </div>
  );
};

export default PostCard;
