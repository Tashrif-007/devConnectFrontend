import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Login Card */}
        <div className="login-card">
          <div className="login-content">
            {/* Title */}
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Sign in to your devConnect account</p>
            </div>

            {/* Form */}
            <LoginForm />

            {/* Signup Link */}
            <div className="login-footer">
              <p>
                New to devConnect? <Link to="/signup">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
