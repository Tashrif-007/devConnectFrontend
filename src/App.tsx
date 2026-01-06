import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import EmailVerifiedPage from "./pages/EmailVerifiedPage";
import LandingPage from "./pages/LandingPage";
import FeedPage from "./pages/FeedPage";
import UserProfilePage from "./pages/UserProfilePage";
import PublicUserProfile from "./pages/PublicUserProfile";
import StoryDetailPage from "./pages/StoryDetailPage";
import AdminPage from "./pages/AdminPage";
import { PublicRoute, ProtectedRoute } from "./components/layout";
import { USER_ROLES } from "./constants/adminConstants";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signup"
          element={<PublicRoute element={<AuthPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute element={<AuthPage />} />}
        />
        <Route path="/email-verified" element={<EmailVerifiedPage />} />

        <Route path="/feed" element={<FeedPage />} />
        <Route path="/stories/:storyId" element={<StoryDetailPage />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<UserProfilePage />} />}
        />
        <Route path="/profile/:userId" element={<PublicUserProfile />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              element={<AdminPage />}
              requiredRole={USER_ROLES.ADMIN}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
