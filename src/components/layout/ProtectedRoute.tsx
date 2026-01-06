import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import type { ProtectedRouteProps } from "../../types/auth";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  requiredRole,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
