import React from "react";
import PostCardHeader from "./PostCardHeader";
import PostCardContent from "./PostCardContent";
import PostCardTags from "./PostCardTags";
import PostCardActions from "./PostCardActions";
import { useNavigate } from "react-router-dom";
import styles from "./PostCard.module.css";
import type { Story } from "../../interfaces";

interface PostCardProps {
  story: Story;
}

const PostCard: React.FC<PostCardProps> = ({ story }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/stories/${story.storyId}`);
  };

  return (
    <div onClick={handleCardClick} className={styles.card}>
      <PostCardHeader user={story.user} createdAt={story.createdAt} />
      <PostCardContent title={story.title} body={story.body} />
      <div className={styles.footer}>
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
