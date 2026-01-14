import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import styles from "./CommentCard.module.css";
import type { Comment } from "../../../interfaces";
import { useDeleteCommentMutation } from "../../../queries/comments/deleteComment";
import { useAuth } from "../../../hooks/useAuth";
import ConfirmModal from "../../modals/confirm/ConfirmModal";
import { Button } from "../../ui";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { deleteComment, loading } = useDeleteCommentMutation();
  const { user } = useAuth();

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteComment(comment.commentId);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };
  const formattedDate = new Date(comment.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          {comment.user.profilePictureUrl && (
            <img
              src={comment.user.profilePictureUrl}
              alt={comment.user.name}
              className={styles.avatar}
            />
          )}
          <div>
            <p className={styles.userName}>{comment.user.name}</p>
            <p className={styles.userHandle}>@{comment.user.username}</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <span className={styles.date}>{formattedDate}</span>
          {user && user.userId === comment.user.userId && (
            <Button
              onClick={handleDeleteClick}
              disabled={loading}
              className={styles.deleteButton}
            >
              <FiTrash2 size={16} />
            </Button>
          )}
        </div>
      </div>

      <p className={styles.body}>{comment.body}</p>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Delete Comment"
        message="Are you sure you want to delete this comment? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        isLoading={loading}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default CommentCard;
