import React from "react";
import type { Comment } from "../../types";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const formattedDate = new Date(comment.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          {comment.user.profilePictureUrl && (
            <img
              src={comment.user.profilePictureUrl}
              alt={comment.user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-sm text-gray-900">
              {comment.user.name}
            </p>
            <p className="text-xs text-gray-500">@{comment.user.username}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500">{formattedDate}</span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
        {comment.body}
      </p>
    </div>
  );
};

export default CommentCard;
