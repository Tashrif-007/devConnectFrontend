import React, { useEffect } from "react";
import { useComments } from "../../hooks/useComments";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

interface CommentsSectionProps {
  storyId: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ storyId }) => {
  const { comments, loading, error, addComment, fetchComments } = useComments(storyId);
  useEffect(() => {
    fetchComments(storyId);
  }, [storyId, fetchComments]);

  const handleAddComment = async (body: string): Promise<boolean> => {
    return addComment(storyId, body);
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Comments ({comments.length})
      </h3>

      <CommentForm onSubmit={handleAddComment} isLoading={loading} />

      {loading && comments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading comments...</p>
        </div>
      ) : error && comments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {comments.map((comment) => (
            <CommentCard key={comment.commentId} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
