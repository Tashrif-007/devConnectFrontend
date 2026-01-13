import React from "react";
import { AuthFooter } from "../components/auth/layout/AuthFooter";
import { AuthHeader } from "../components/auth/layout/AuthHeader";
import SignupForm from "../components/auth/forms/SignupForm";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/auth";
import styles from "./AuthPage.module.css";

const SignupPage: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const footerLink = isLogin ? "/signup" : "/login";
  const footerValue = isLogin
    ? "New to devConnect?"
    : "Already have an account?";
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <AuthHeader
          hValue="Join devConnect"
          pValue="Start sharing your code journey today."
          className={styles.header}
        />
        {isLogin ? <LoginForm /> : <SignupForm />}
        <AuthFooter value={footerValue} link={footerLink} />
      </div>
    </div>
  );
};

export default SignupPage;
