import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateFormatter";
import type { User } from "../../types";
import { Button, Paragraph } from "../ui";
import { UI_CONFIG, getPublicProfileRoute } from "../../constants/index";
import styles from "./PostCardHeader.module.css";

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
    navigate(getPublicProfileRoute(user.userId));
    onUserClick?.();
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleProfileClick} className={styles.button}>
        <img
          className={styles.avatar}
          src={
            user.profilePictureUrl ||
            `${UI_CONFIG.AVATAR_URL}?seed=${user.name}`
          }
          alt={user.username}
        />
      </Button>
      <div className={styles.info}>
        <Button onClick={handleProfileClick} className={styles.userName}>
          {user.name}
        </Button>
        <Paragraph className={styles.date}>{formatDate(createdAt)}</Paragraph>
      </div>
    </div>
  );
};

export default PostCardHeader;
