import { useNavigate } from "react-router-dom";
import PostCard from "../feed/PostCard";
import { useGetStories } from "../../queries/stories/getStories";
import { PostCardSkeletonLoader } from "../feed/PostCardSkeleton";
import { ROUTES } from "../../constants";
import styles from "./RecentPosts.module.css";
import type { Story } from "../../interfaces";

export default function RecentPosts() {
  const navigate = useNavigate();
  const { stories, loading } = useGetStories(1, undefined);

  const recentPosts = stories.slice(0, 3);
  return (
    <section className={styles["section"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <div className={styles["header-content"]}>
            <p className={styles["header-label"]}>Community Feed</p>
            <h2 className={styles["header-title"]}>Fresh from the community</h2>
          </div>
          <button
            onClick={() => navigate(ROUTES.PUBLIC.FEED)}
            className={styles["view-all-button-desktop"]}
          >
            View all posts
            <svg
              className={styles["icon"]}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        <div className={styles["grid"]}>
          {loading ? (
            <>
              <PostCardSkeletonLoader />
              <PostCardSkeletonLoader />
              <PostCardSkeletonLoader />
            </>
          ) : (
            recentPosts.map((story) => (
              <PostCard key={story.storyId} story={story} />
            ))
          )}
        </div>

        <div className={styles["mobile-button-container"]}>
          <button
            onClick={() => navigate("/feed")}
            className={styles["view-all-button-mobile"]}
          >
            View all posts
            <svg
              className={styles["icon"]}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
