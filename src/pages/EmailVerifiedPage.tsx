import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import styles from "./EmailVerifiedPage.module.css";

const EmailVerifiedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className="w-full max-w-sm">
        <div className={styles.card}>
          <div className={styles.banner}></div>
          <div className={styles.content}>
            <div className={styles.successIcon}>
              ✓
            </div>
            <h1 className={styles.title}>
              Email Verified!
            </h1>
            <p className={styles.description}>
              Your email address has been successfully verified. You can now
              access all features of devConnect.
            </p>
            <Button
              variant="primary"
              onClick={handleGoToLogin}
              className={styles.button}
            >
              Go to Login →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifiedPage;
