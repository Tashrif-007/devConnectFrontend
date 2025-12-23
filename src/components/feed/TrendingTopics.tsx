import React from "react";
import { FiArrowRight, FiCode } from "react-icons/fi";
import { useTrendingCategories } from "../../hooks/useTrendingCategories";

const TrendingTopics: React.FC = () => {
  const { trendingCategories, loading, error } = useTrendingCategories();

  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-4">
          <FiCode size={20} className="text-gray-700" />
          <h3 className="text-lg font-bold text-gray-900">Trending Topics</h3>
        </div>
        <div className="text-red-500 text-sm">
          Error loading trending topics
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-4">
        <FiCode size={20} className="text-gray-700" />
        <h3 className="text-lg font-bold text-gray-900">Trending Topics</h3>
      </div>

      <div className="space-y-2">
        {loading ? (
          <div className="text-gray-500 text-sm">
            Loading trending topics...
          </div>
        ) : trendingCategories.length === 0 ? (
          <div className="text-gray-500 text-sm">No trending topics yet</div>
        ) : (
          trendingCategories.map((category) => (
            <div
              key={category.categoryId}
              className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div>
                <span className="text-gray-700 text-sm">#{category.name}</span>
                <span className="text-gray-400 text-xs ml-2">
                  {category.storyCount} stories
                </span>
              </div>
              <span className="text-gray-400 text-xs">
                <FiArrowRight />
              </span>
            </div>
          ))
        )}
      </div>

      <button className="w-full mt-5 py-2.5 text-center text-gray-700 text-sm font-semibold hover:bg-gray-50 rounded transition-colors border border-gray-200">
        View all tags
      </button>
    </div>
  );
};

export default TrendingTopics;
