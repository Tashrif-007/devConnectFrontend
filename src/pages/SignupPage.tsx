import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import Divider from "../components/Divider";
import OAuthButton from "../components/OAuthButton";

const SignupPage: React.FC = () => {
  const handleGithubClick = () => {
    alert("GitHub signup clicked");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Signup Card */}
        <div className="signup-card">
          <div className="signup-content">
            {/* Title */}
            <div className="signup-header">
              <h1>Join devConnect</h1>
              <p>Start sharing your code journey today.</p>
            </div>

            {/* Form */}
            <SignupForm />

            {/* Divider */}
            <Divider text="OR SIGN UP WITH" />

            {/* OAuth Button */}
            <OAuthButton provider="github" onClick={handleGithubClick} />

            {/* Login Link */}
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
