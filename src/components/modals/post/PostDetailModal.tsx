import React from "react";
import type { Story } from "../../../types";
import ModalHeader from "../shared/ModalHeader";
import PostAuthor from "./PostAuthor";
import PostTitle from "./PostTitle";
import PostTags from "./PostTags";
import PostBody from "./PostBody";
import PostSummary from "./PostSummary";
import VoteButtons from "../../ui/VoteButtons";
import styles from './PostDetailModal.module.css';

interface PostDetailModalProps {
  isOpen: boolean;
  story: Story | null;
  onClose: () => void;
}

const PostDetailModal: React.FC<PostDetailModalProps> = ({
  isOpen,
  story,
  onClose,
}) => {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[85vh] flex flex-col shadow-lg">
        <ModalHeader title="Post Details" onClose={onClose} />
        <div className="flex-1 overflow-y-auto p-6">
          <PostAuthor user={story.user} createdAt={story.createdAt} />
          <PostTitle title={story.title} />
          <PostTags tags={story.categoryNames} />
          <PostBody body={story.body} />
          {story.summary && <PostSummary summary={story.summary} />}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Votes</p>
            <VoteButtons
              storyId={story.storyId}
              upvotes={story.votes.upvotes}
              downvotes={story.votes.downvotes}
              userVote={story.votes.userVote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;
