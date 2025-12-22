import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";
import Divider from "../components/common/Divider";
import OAuthButton from "../components/auth/OAuthButton";

const SignupPage: React.FC = () => {
  const handleGithubClick = () => {
    alert("GitHub signup clicked");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-content">
            <div className="signup-header">
              <h1>Join devConnect</h1>
              <p>Start sharing your code journey today.</p>
            </div>
            <SignupForm />
            <Divider text="OR SIGN UP WITH" />
            <OAuthButton provider="github" onClick={handleGithubClick} />
            <div className="signup-footer">
              <p>
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
