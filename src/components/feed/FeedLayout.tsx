import React, { useEffect, useRef } from "react";
import PostsList from "../../layouts/PostsList";
import Sidebar from "../../layouts/Sidebar";
import { Header, Paragraph } from "../ui";
import type { PaginationData, Story } from "../../types";
import styles from "./FeedLayout.module.css";

type FeedLayoutProps = {
  stories: Story[];
  pagination: PaginationData | null;
  loading: boolean;
  fetchStories: (page: number, category?: string) => Promise<void>;
  currentCategory?: string;
};

const FeedLayout: React.FC<FeedLayoutProps> = ({
  stories,
  pagination,
  loading,
  fetchStories,
  currentCategory,
}) => {
  const handlePageChange = (page: number) => {
    fetchStories(page, currentCategory);
  };
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedRef?.current) {
      feedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pagination, feedRef]);

  return (
    <div ref={feedRef} className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.feedHeader}>
          <Header level={1} value="Your Feed" className={styles.title} />
          {currentCategory && (
            <Paragraph className={styles.categoryFilter}>
              Filtered by:{currentCategory}
            </Paragraph>
          )}
        </div>
        <div className={styles.postsContainer}>
          <PostsList
            stories={stories}
            pagination={pagination}
            loading={loading}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default FeedLayout;
