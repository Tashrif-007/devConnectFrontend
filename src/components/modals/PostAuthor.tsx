import React from "react";
import { formatDate } from "../../utils/dateFormatter";
import type { User } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import StoryCardOptions from "../story/StoryCardOptions";
import { useCreateStory } from "../../hooks/useCreateStory";
import { avatarUrl } from "../../constants";

interface PostAuthorProps {
  user: User;
  createdAt: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ user, createdAt }) => {
  const { user: loggedUser } = useAuth();
  const navigate = useNavigate();
  const { storyId } = useParams<{ storyId: string }>();
  const isOwner = user.userId === loggedUser?.userId;

  const { deleteStory } = useCreateStory();

  const handleEdit = () => {
    navigate(`/stories/${storyId}/edit`);
  };

  const handleClick = () => {
    navigate(`/profile/${user.userId}`);
  }
  const handleDelete = async () => {
    if (!storyId) return;
    await deleteStory(storyId);
    navigate('/feed');
  };

  return (
    <div className="flex items-start gap-3 mb-5" onClick={handleClick}>
      <div className="w-12 h-12 rounded-full shrink-0 bg-gray-200 overflow-hidden">
        <img
          src={user.profilePictureUrl || `${avatarUrl}?seed=${user.name}`}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-base">{user.name}</h3>
        <p className="text-xs text-gray-500">@{user.username}</p>
        <p className="text-xs text-gray-500 mt-1">{formatDate(createdAt)}</p>
      </div>
      {isOwner && (
        <StoryCardOptions
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default PostAuthor;
