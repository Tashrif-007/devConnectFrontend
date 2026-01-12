import React from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types";
import { UI_CONFIG, getPublicProfileRoute } from "../../constants";
import styles from "./DeveloperCard.module.css";

interface DeveloperCardProps {
  developer: User;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getPublicProfileRoute(developer.userId));
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
        <div className={styles.avatar}>
          <img
            src={
              developer.profilePictureUrl ||
              `${UI_CONFIG.AVATAR_URL}?seed=${developer.name}`
            }
            alt={developer.name}
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{developer.name}</p>
          <p className={styles.username}>@{developer.username}</p>
        </div>
      </button>
    </div>
  );
};

export default DeveloperCard;
