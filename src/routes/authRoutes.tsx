import { PublicRoute } from "../components/layout"
import AuthPage from '../pages/AuthPage';
import EmailVerifiedPage from "../pages/EmailVerifiedPage";

export const authRoutes = [
    {
        path: "/signup",
        element: <PublicRoute element={<AuthPage />} />
    },
    {
        path: "/login",
        element: <PublicRoute element={<AuthPage />} />
    },
    {
        path: "/email-verified",
        element: <EmailVerifiedPage />
    },
];