import React, { useEffect, useRef } from "react";
import PostsList from "../../layouts/PostsList";
import Sidebar from "../../layouts/Sidebar";
import type { PaginationData, Story } from "../../types";
import { Header } from "../ui/Header";
import { Paragraph } from "../ui/Paragraph";

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
      <Sidebar />
    </div>
  );
};

export default FeedLayout;
