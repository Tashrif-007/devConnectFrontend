import { useNavigate } from "react-router-dom";
import PostCard from "../components/feed/PostCard";
import { useGetStories } from "../queries/stories/getStories";
import { PostCardSkeletonLoader } from "../components/feed/PostCardSkeleton";
import { ROUTES } from "../constants";
import styles from "./RecentPosts.module.css";

export default function RecentPosts() {
  const navigate = useNavigate();
  const { stories, loading } = useGetStories(1, undefined);

  const recentPosts = stories.slice(0, 3);
  return (
    <section className={styles.section}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={styles.header}>
          <div>
            <p className={styles.badge}>
              Community Feed
            </p>
            <h2 className={styles.title}>
              Fresh from the community
            </h2>
          </div>
          <button
            onClick={() => navigate(ROUTES.PUBLIC.FEED)}
            className={styles.linkContainer}
          >
            View all posts
            <svg
              className={styles.linkIcon}
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

        <div className={styles.grid}>
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

        <div className={styles.mobileButtonContainer}>
          <button
            onClick={() => navigate("/feed")}
            className={styles.mobileButton}
          >
            View all posts
            <svg
              className={styles.mobileButtonIcon}
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
