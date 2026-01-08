import { ProtectedRoute } from "../components/layout";
import { USER_ROLES } from "../constants/adminConstants";
import AdminPage from "../pages/AdminPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute element={<AdminPage />} requiredRole={USER_ROLES.ADMIN} />
    ),
  },
];
