import React from "react";
import PostCard from "../components/feed/PostCard";
import { PostCardSkeletonLoader } from "../components/feed/PostCardSkeleton";
import Pagination from "../components/feed/Pagination";
import type { PaginationData } from "../types";
import type { Story } from "../interfaces";
import styles from "./PostsList.module.css";

interface PostsListProps {
  stories: Story[];
  pagination: PaginationData | null;
  loading: boolean;
  onPageChange: (page: number) => void;
}

const PostsList: React.FC<PostsListProps> = ({
  stories,
  pagination,
  loading,
  onPageChange,
}) => {
  if (loading) {
    return (
      <div className="space-y-4">
        <PostCardSkeletonLoader />
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyStateText}>No posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      <div className={styles.listContainer}>
        {stories.map((story) => (
          <PostCard key={story.storyId} story={story} />
        ))}
      </div>
      <div className="mt-6">
        {pagination && pagination.totalPages > 1 && (
          <Pagination pagination={pagination} onPageChange={onPageChange} />
        )}
      </div>
    </div>
  );
};

export default PostsList;
