import React from "react";
import { formatDate } from "../../../utils/dateFormatter";
import type { User } from "../../../types";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import StoryCardOptions from "../../story/card/StoryCardOptions";
import { useCreateStory } from "../../../hooks/useCreateStory";
import styles from "./PostAuthor.module.css";
import {
  UI_CONFIG,
  getEditPostRoute,
  getPublicProfileRoute,
  ROUTES,
} from "../../../constants";

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
    navigate(getEditPostRoute(storyId!));
  };

  const handleClick = () => {
    navigate(getPublicProfileRoute(user.userId));
  };
  const handleDelete = async () => {
    if (!storyId) return;
    await deleteStory(storyId);
    navigate(ROUTES.PUBLIC.FEED);
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar} onClick={handleClick}>
        <img
          src={
            user.profilePictureUrl ||
            `${UI_CONFIG.AVATAR_URL}?seed=${user.name}`
          }
          alt={user.name}
          className={styles.avatarImage}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.username}>@{user.username}</p>
        <p className={styles.date}>{formatDate(createdAt)}</p>
      </div>
      {isOwner && (
        <StoryCardOptions onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default PostAuthor;
