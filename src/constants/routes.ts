export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    FEED: "/feed",
    STORY_DETAIL: "/stories/:storyId",
  },

  AUTH: {
    SIGNUP: "/signup",
    LOGIN: "/login",
    EMAIL_VERIFIED: "/email-verified",
  },

  APP: {
    SEARCH: "/search",
    SEARCH_USER_TAB: "?find=&tab=users",
    CREATE_POST: "/create",
    EDIT_POST: "/stories/:storyId/edit",
    PROFILE: "/profile",
    PUBLIC_PROFILE: "/profile/:userId",
  },

  ADMIN: {
    DASHBOARD: "/admin",
  },
} as const;

export const getStoryDetailRoute = (storyId: string): string =>
  `/stories/${storyId}`;

export const getEditPostRoute = (storyId: string): string =>
  `/stories/${storyId}/edit`;

export const getPublicProfileRoute = (userId: string): string =>
  `/profile/${userId}`;
