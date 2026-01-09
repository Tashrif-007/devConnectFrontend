import { useState } from "react";
import type { Story } from "../../types";
import PostDetailModal from "../modals/PostDetailModal";

interface PostCardProps {
  tag: string;
  tagColor: string;
  author: string;
  timeAgo: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  story?: Story;
}

export default function PostCard({
  tag,
  tagColor,
  author,
  timeAgo,
  title,
  description,
  likes,
  comments,
  story,
}: PostCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => story && setIsModalOpen(true)}
        className={`group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full ${
          story ? "cursor-pointer" : ""
        }`}
      >
        <div className={`w-full h-48 ${tagColor} relative`}>
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-slate-900">
            {tag}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-slate-300"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{author}</p>
              <p className="text-xs text-slate-500">{timeAgo}</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              {likes}
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              {comments}
            </div>
          </div>
        </div>
      </div>

      {story && (
        <PostDetailModal
          isOpen={isModalOpen}
          story={story}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
