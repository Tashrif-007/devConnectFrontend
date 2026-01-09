import { ProtectedRoute } from "../layouts";
import AdminPage from "../pages/AdminPage";
import {USER_ROLES} from '../types'
export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute element={<AdminPage />} requiredRole={USER_ROLES.ADMIN} />
    ),
  },
];
