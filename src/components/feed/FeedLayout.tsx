import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import PostsList from "../../layouts/PostsList";
import Sidebar from "../../layouts/Sidebar";
<<<<<<< HEAD
import { Header, Paragraph, Button } from "../ui";
import type { PaginationData } from "../../types";
import styles from "./FeedLayout.module.css";
import type { Story } from "../../interfaces";
import { UI_MESSAGES } from "../../constants";
import sidebarStyles from "../../layouts/Sidebar.module.css";
=======
import { Header, Paragraph } from "../ui";
import type { PaginationData, Story } from "../../types";
>>>>>>> 4eabfa6 (refactor: use Button, Paragraph, Header components instead html)

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
          <div className={styles.headerTop}>
            <Header
              level={1}
              value={UI_MESSAGES.PAGE_TITLES.FEED}
              className={styles.title}
            />
            <Button
              className={styles.sidebarToggle}
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <RxHamburgerMenu size={24} />
            </Button>
          </div>
          {currentCategory && (
            <Paragraph className="text-sm text-gray-600 mt-2">
              Filtered by:{currentCategory}
            </Paragraph>
          )}
        </div>
        <div className="flex-1">
          <PostsList
            stories={stories}
            pagination={pagination}
            loading={loading}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className={styles.desktopSidebar}>
        <Sidebar />
      </div>
      {isSidebarOpen && (
        <>
          <div
            className={sidebarStyles.backdrop}
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className={sidebarStyles.drawer}>
            <button
              className={sidebarStyles.closeButton}
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <RxCross2 size={24} />
            </button>
            <div className="p-4">
              <Sidebar showDevelopers={false} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedLayout;
