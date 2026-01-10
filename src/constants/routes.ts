/**
 * Route Paths
 * All application route paths
 */

export const ROUTES = {
  // Public routes
  PUBLIC: {
    HOME: "/",
    FEED: "/feed",
    STORY_DETAIL: "/stories/:storyId",
  },

  // Auth routes
  AUTH: {
    SIGNUP: "/signup",
    LOGIN: "/login",
    EMAIL_VERIFIED: "/email-verified",
  },

  // Protected app routes
  APP: {
    SEARCH: "/search",
    SEARCH_USER_TAB: "?find=&tab=users",
    CREATE_POST: "/create",
    EDIT_POST: "/stories/:storyId/edit",
    PROFILE: "/profile",
    PUBLIC_PROFILE: "/profile/:userId",
  },

  // Admin routes
  ADMIN: {
    DASHBOARD: "/admin",
  },
} as const;

// Helper function to generate story detail route
export const getStoryDetailRoute = (storyId: string): string =>
  `/stories/${storyId}`;

// Helper function to generate edit post route
export const getEditPostRoute = (storyId: string): string =>
  `/stories/${storyId}/edit`;

// Helper function to generate public profile route
export const getPublicProfileRoute = (userId: string): string =>
  `/profile/${userId}`;
