import FeedPage from "../pages/FeedPage";
import LandingPage from "../pages/LandingPage";
import StoryDetailPage from "../pages/StoryDetailPage";

export const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  },
  {
    path: "/stories/:storyId",
    element: <StoryDetailPage />,
  },
];
