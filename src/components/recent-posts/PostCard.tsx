import { useState } from "react";
import PostDetailModal from "../modals/post/PostDetailModal";
import styles from "./PostCard.module.css";
import type { Story } from "../../interfaces";

interface PostCardProps {
  tag: string;
  tagColor: string;
  author: string;
  timeAgo: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  story?: Story;
}

export default function PostCard({
  tag,
  tagColor,
  author,
  timeAgo,
  title,
  description,
  likes,
  comments,
  story,
}: PostCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => story && setIsModalOpen(true)}
        className={`${styles["card"]} ${story ? styles["card-clickable"] : ""}`}
      >
        <div className={`${styles["card-header"]} ${tagColor}`}>
          <div className={styles["card-tag"]}>{tag}</div>
        </div>

        <div className={styles["card-body"]}>
          <div className={styles["author-info"]}>
            <div className={styles["author-avatar"]}></div>
            <div className={styles["author-details"]}>
              <p className={styles["author-name"]}>{author}</p>
              <p className={styles["author-time"]}>{timeAgo}</p>
            </div>
          </div>

          <h3 className={styles["card-title"]}>{title}</h3>

          <p className={styles["card-description"]}>{description}</p>

          <div className={styles["card-footer"]}>
            <div className={styles["footer-stat"]}>
              <svg
                className={styles["stat-icon"]}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              {likes}
            </div>
            <div className={styles["footer-stat"]}>
              <svg
                className={styles["stat-icon"]}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              {comments}
            </div>
          </div>
        </div>
      </div>

      {story && (
        <PostDetailModal
          isOpen={isModalOpen}
          story={story}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
