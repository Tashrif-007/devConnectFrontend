import React from "react";
import type { Comment } from "../../../types";
import styles from "./CommentCard.module.css";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
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
        <span className={styles.date}>{formattedDate}</span>
      </div>

      <p className={styles.body}>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
