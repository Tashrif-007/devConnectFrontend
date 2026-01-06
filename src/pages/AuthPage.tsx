import React from "react";
import { AuthFooter } from "../components/auth/AuthFooter";
import { AuthHeader } from "../components/auth/AuthHeader";
import SignupForm from "../components/auth/SignupForm";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/auth";

const SignupPage: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const footerLink = isLogin ? '/signup' : '/login';
  const footerValue = isLogin ? 'New to devConnect?' : 'Already have an account?';
  return (
    <div className="flex rounded w-full flex-col min-h-screen justify-center items-center bg-[#f3f4f6]">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <AuthHeader
          hValue="Join devConnect"
          pValue="Start sharing your code journey today."
          className="text-center flex flex-col gap-2"
        />
        {isLogin ? (<LoginForm />) : (<SignupForm />)}
        <AuthFooter value={footerValue} link={footerLink} />
      </div>
    </div>
  );
};

export default SignupPage;
