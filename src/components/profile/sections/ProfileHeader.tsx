import React from "react";
import styles from "./ProfileHeader.module.css";

const ProfileHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.decorativeCircleTop}></div>
      <div className={styles.decorativeCircleBottom}></div>
    </div>
  );
};

export default ProfileHeader;
