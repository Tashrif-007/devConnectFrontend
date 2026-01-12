import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const EmailVerifiedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-slate-300"></div>
          <div className="pt-8 pb-8 px-8 flex flex-col gap-6 items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Email Verified!
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Your email address has been successfully verified. You can now
              access all features of devConnect.
            </p>
            <Button
              variant="primary"
              onClick={handleGoToLogin}
              className="w-full rounded-full"
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
