import React, { useEffect, useRef } from "react";
import PostsList from "../../layouts/PostsList";
import Sidebar from "../../layouts/Sidebar";
import { Header, Paragraph } from "../ui";
import type { PaginationData } from "../../types";
import styles from "./FeedLayout.module.css";
import type { Story } from "../../interfaces";
import { UI_MESSAGES } from "../../constants";

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
<<<<<<< HEAD
    <div ref={feedRef} className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.feedHeader}>
          <Header level={1} value={UI_MESSAGES.PAGE_TITLES.FEED} className={styles.title} />
          {currentCategory && (
            <Paragraph className={styles.categoryFilter}>
=======
    <div ref={feedRef} className="mt-6 flex gap-8 px-10 justify-center">
      <div className="flex flex-col w-8/15">
        <div className="mb-6">
          <Header
            level={1}
            value="Your Feed"
            className="text-gray-900 text-2xl font-bold"
          />
          {currentCategory && (
            <Paragraph className="text-sm text-gray-600 mt-2">
>>>>>>> 00cd111 (refactor: use Button, Paragraph, Header components instead html)
              Filtered by:{currentCategory}
            </Paragraph>
          )}
        </div>
<<<<<<< HEAD
        <div className={styles.postsContainer}>
=======
        <div className="flex-1">
>>>>>>> 00cd111 (refactor: use Button, Paragraph, Header components instead html)
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
