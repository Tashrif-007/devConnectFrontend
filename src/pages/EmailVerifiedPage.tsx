import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { EMAIL_VERIFIED_PAGE } from "../constants/pages";
import styles from "./EmailVerifiedPage.module.css";

const EmailVerifiedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate(EMAIL_VERIFIED_PAGE.LOGIN_PATH);
  };

  return (
    <div className={styles.container}>
      <div className="w-full max-w-sm">
        <div className={styles.card}>
          <div className={styles.banner}></div>
          <div className={styles.content}>
            <div className={styles.successIcon}>
              {EMAIL_VERIFIED_PAGE.SUCCESS_ICON}
            </div>
            <h1 className={styles.title}>{EMAIL_VERIFIED_PAGE.TITLE}</h1>
            <p className={styles.description}>
              {EMAIL_VERIFIED_PAGE.DESCRIPTION}
            </p>
            <Button
              variant="primary"
              onClick={handleGoToLogin}
              className={styles.button}
            >
              {EMAIL_VERIFIED_PAGE.BUTTON_TEXT}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifiedPage;
