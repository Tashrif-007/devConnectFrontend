import React from "react";
import ModalHeader from "../shared/ModalHeader";
import PostAuthor from "./PostAuthor";
import PostTitle from "./PostTitle";
import PostTags from "./PostTags";
import PostBody from "./PostBody";
import PostSummary from "./PostSummary";
import VoteButtons from "../../ui/VoteButtons";
import styles from "./PostDetailModal.module.css";
import type { Story } from "../../../interfaces";

interface PostDetailModalProps {
  isOpen: boolean;
  story: Story | null;
  onClose: () => void;
}

const PostDetailModal: React.FC<PostDetailModalProps> = ({
  isOpen,
  story,
  onClose,
}) => {
  if (!isOpen || !story) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <ModalHeader title="Post Details" onClose={onClose} />
        <div className={styles.content}>
          <PostAuthor user={story.user} createdAt={story.createdAt} />
          <PostTitle title={story.title} />
          <PostTags tags={story.categoryNames} />
          <PostBody body={story.body} />
          {story.summary && <PostSummary summary={story.summary} />}
          <div className={styles.votesSection}>
            <p className={styles.votesLabel}>Votes</p>
            <VoteButtons
              storyId={story.storyId}
              upvotes={story.votes.upvotes}
              downvotes={story.votes.downvotes}
              userVote={story.votes.userVote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;
