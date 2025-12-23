import React from "react";
import { FiArrowRight, FiCode } from "react-icons/fi";
interface TrendingTopicsProps {
  tags?: string[];
}

const DUMMY_TAGS = [
  "javascript",
  "react",
  "typescript",
  "webdev",
  "frontend",
  "backend",
  "nodejs",
  "api",
  "css",
  "testing",
];

const TrendingTopics: React.FC<TrendingTopicsProps> = ({
  tags = DUMMY_TAGS,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-4">
        <FiCode size={20} className="text-gray-700" />
        <h3 className="text-lg font-bold text-gray-900">Trending Topics</h3>
      </div>

      <div className="space-y-2">
        {tags.slice(0, 5).map((tag) => (
          <div
            key={tag}
            className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <span className="text-gray-700 text-sm">#{tag}</span>
            <span className="text-gray-400 text-xs">
              <FiArrowRight />
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-5 py-2.5 text-center text-gray-700 text-sm font-semibold hover:bg-gray-50 rounded transition-colors border border-gray-200">
        View all tags
      </button>
    </div>
  );
};

export default TrendingTopics;
