import React from "react";
import FeedLayout from "../components/feed/FeedLayout";
import { useStories } from "../hooks/useStories";

const FeedPage: React.FC = () => {
  const { stories, pagination, loading, fetchStories, currentCategory } =
    useStories();
  return (
      <FeedLayout
        stories={stories}
        pagination={pagination}
        loading={loading}
        fetchStories={fetchStories}
        currentCategory={currentCategory}
      />
  );
};

export default FeedPage;
