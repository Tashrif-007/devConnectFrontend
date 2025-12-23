import React from "react";
import PostCard from "./PostCard";
import { PostCardSkeletonLoader } from "./PostCardSkeleton";
import TrendingTopics from "./TrendingTopics";
import Pagination from "./Pagination";
import { useStories } from "../../hooks/useStories";
import Developers from "./Developers";

const FeedLayout: React.FC = () => {
  const { stories, pagination, loading, fetchStories } = useStories();

  const handlePageChange = (page: number) => {
    fetchStories(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Your Feed</h1>
          </div>

          {loading ? (
            <div className="grid grid-cols-3 gap-4">
              <PostCardSkeletonLoader />
            </div>
          ) : stories.length > 0 ? (
            <>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stories.map((story) => (
                  <PostCard key={story.storyId} story={story} />
                ))}
              </div>
              <div className="flex justify-center">
                {pagination && pagination.totalPages > 1 && (
                  <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <p className="text-gray-500 text-lg">
                No posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
        <div className="w-80">
          <div className="sticky top-20 space-y-6">
            <TrendingTopics />
            <Developers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedLayout;
