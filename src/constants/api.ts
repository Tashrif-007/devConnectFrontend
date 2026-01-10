/**
 * API Endpoints
 * All API endpoint paths used throughout the application
 */

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    SIGNUP: "/auth/signup",
    LOGIN: "/auth/login",
    UPDATE_PASSWORD: "/auth/update-password",
    RESEND_CONFIRMATION_EMAIL: "/auth/resend-confirmation-email",
  },

  // Stories endpoints
  STORIES: {
    BASE: "/stories",
    BY_ID: (storyId: string) => `/stories/${storyId}`,
    BY_USER_ID: (userId: string) => `/stories/user/${userId}`,
    COMMENTS: (storyId: string) => `/stories/${storyId}/comments`,
    VOTES: (storyId: string) => `/stories/${storyId}/votes`,
  },

  // Categories endpoints
  CATEGORIES: {
    BASE: "/categories",
    BY_ID: (categoryId: string) => `/categories/${categoryId}`,
  },

  // Users endpoints
  USERS: {
    BASE: "/users",
    BY_ID: (userId: string) => `/users/${userId}`,
  },

  // Admin endpoints
  ADMIN: {
    UPDATE_USER_ROLE: (userId: string) => `/admin/role/${userId}`,
  },
} as const;
