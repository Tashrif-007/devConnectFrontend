import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants";
import styles from './HeroSection.module.css';

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { isAuthenticated } = useAuth();
  return (
    <section className={styles.section}>
      <div className={styles.absoluteOverlay}>
        <div className={styles.gradientTop}></div>
        <div className={styles.gradientBottom}></div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          Where Developers
          <span className={styles.titleSpan}>Build Together.</span>
        </h1>

        <p className={styles.description}>
          Escape the noise. Join a purpose-built community for software
          engineers to share deep technical insights, debug complex problems,
          and accelerate career growth.
        </p>

        <div className={styles.buttonsContainer}>
          {!isAuthenticated && (
            <Link to={ROUTES.AUTH.SIGNUP} className={styles.buttonPrimary}>
              Get Started
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          )}
          <Link to={ROUTES.PUBLIC.FEED} className={styles.buttonSecondary}>
            Posts
            <svg
              className={styles.iconSecondary}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
