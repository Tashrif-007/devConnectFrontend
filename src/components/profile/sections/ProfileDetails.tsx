import React from "react";
import { formatProfileDate } from "../../../utils/dateFormatter";
import styles from "./ProfileDetails.module.css";

interface ProfileDetailsProps {
  email: string;
  joinDate: Date | string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ email, joinDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.detailBox}>
        <label className={styles.label}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email
        </label>
        <p className={styles.value}>{email}</p>
      </div>
      <div className={styles.detailBox}>
        <label className={styles.label}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Joined
        </label>
        <p className={styles.value}>{formatProfileDate(joinDate)}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
