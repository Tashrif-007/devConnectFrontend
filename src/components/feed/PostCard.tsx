import React from "react";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import { formatDate } from "../../utils/dateFormatter";
import type { PostCardProps } from "../../types";

const PostCard: React.FC<PostCardProps> = ({ story }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {story.user.username.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm truncate">
            {story.user.name}
          </h3>
          <p className="text-xs text-gray-500">{formatDate(story.createdAt)}</p>
        </div>
      </div>

      <h2 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
        {story.title}
      </h2>

      <p className="text-gray-700 text-xs line-clamp-2 mb-3 flex-1">
        {story.body}
      </p>

      {story.categoryNames.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {story.categoryNames.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100 text-xs">
        <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
          <FiHeart size={14} />
          <span>142</span>
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
          <FiMessageCircle size={14} />
          <span>34</span>
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-green-500 transition-colors">
          <FiShare2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
