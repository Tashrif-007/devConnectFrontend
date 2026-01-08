import { ProtectedRoute } from "../components/layout";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import FeedPage from "../pages/FeedPage";
import PublicUserProfile from "../pages/PublicUserProfile";
import StoryDetailPage from "../pages/StoryDetailPage";
import UserProfilePage from "../pages/UserProfilePage";

export const appRoutes = [
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/create",
    element: <ProtectedRoute element={<CreatePostPage />} />,
  },
  {
    path: "/stories/:storyId",
    element: <StoryDetailPage />,
  },
  {
    path: "/stories/:storyId/edit",
    element: <ProtectedRoute element={<EditPostPage />} />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<UserProfilePage />} />,
  },
  {
    path: "/profile/:userId",
    element: <PublicUserProfile />,
  },
];
