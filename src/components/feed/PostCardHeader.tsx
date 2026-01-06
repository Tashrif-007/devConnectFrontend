import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateFormatter";
import type { User } from "../../types";
import { Button, Paragraph } from "../common";

interface PostCardHeaderProps {
  user: User;
  createdAt: string;
  onUserClick?: () => void;
}

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  user,
  createdAt,
  onUserClick,
}) => {
  const navigate = useNavigate();

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/profile/${user.userId}`);
    onUserClick?.();
  };

  return (
    <div className="flex items-start gap-4 mb-4">
      <Button
        onClick={handleProfileClick}
        className="rounded-full shrink-0 hover:opacity-80 transition-opacity"
      >
        <img
          className="h-12 rounded-full w-12 object-cover"
          src={user.profilePictureUrl || "https://avatar.iran.liara.run/public"}
          alt={user.username}
        />
      </Button>
      <div className="flex-1 min-w-0">
        <Button
          onClick={handleProfileClick}
          className="font-semibold text-gray-900 text-lg hover:text-primary transition-colors text-left"
        >
          {user.name}
        </Button>
        <Paragraph className="text-base text-gray-500">{formatDate(createdAt)}</Paragraph>
      </div>
    </div>
  );
};

export default PostCardHeader;
