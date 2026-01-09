import { ProtectedRoute } from "../layouts";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import PublicUserProfile from "../pages/PublicUserProfile";
import UserProfilePage from "../pages/UserProfilePage";
import SearchResultsPage from "../pages/SearchResultsPage";

export const appRoutes = [
  {
    path: "/search",
    element: <SearchResultsPage />,
  },
  {
    path: "/create",
    element: <ProtectedRoute element={<CreatePostPage />} />,
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
