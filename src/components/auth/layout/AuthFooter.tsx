import type React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthFooter.module.css";

type AuthFooterProps = {
  value: string;
  link: string;
};

export const AuthFooter: React.FC<AuthFooterProps> = ({ value, link }) => {
  const linkVal = link.includes("login") ? "Login" : "Signup";
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {value}{" "}
        <Link to={link} className={styles.link}>
          {" "}
          {linkVal}
        </Link>
      </p>
    </div>
  );
};
