import React, { useEffect } from "react";
import { useComments } from "../../../hooks/useComments";
import CommentCard from "./CommentCard";
import CommentForm from "../form/CommentForm";
import styles from "./CommentsSection.module.css";

interface CommentsSectionProps {
  storyId: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ storyId }) => {
  const { comments, loading, error, addComment, fetchComments } =
    useComments(storyId);
  useEffect(() => {
    fetchComments(storyId);
  }, [storyId, fetchComments]);

  const handleAddComment = async (body: string): Promise<boolean> => {
    return addComment(storyId, body);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments ({comments.length})</h3>

      <CommentForm onSubmit={handleAddComment} isLoading={loading} />

      {loading && comments.length === 0 ? (
        <div className={styles.stateContainer}>
          <p className={styles.loadingText}>Loading comments...</p>
        </div>
      ) : error && comments.length === 0 ? (
        <div className={styles.stateContainer}>
          <p className={styles.errorText}>{error}</p>
        </div>
      ) : comments.length === 0 ? (
        <div className={styles.stateContainer}>
          <p className={styles.emptyText}>
            No comments yet. Be the first to comment!
          </p>
        </div>
      ) : (
        <div className={styles.commentsList}>
          {comments.map((comment) => (
            <CommentCard key={comment.commentId} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
