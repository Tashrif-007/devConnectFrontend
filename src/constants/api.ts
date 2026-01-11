export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "/auth/signup",
    LOGIN: "/auth/login",
    UPDATE_PASSWORD: "/auth/update-password",
    RESEND_CONFIRMATION_EMAIL: "/auth/resend-confirmation-email",
  },

  STORIES: {
    BASE: "/stories",
    BY_ID: (storyId: string) => `/stories/${storyId}`,
    BY_USER_ID: (userId: string) => `/stories/user/${userId}`,
    COMMENTS: (storyId: string) => `/stories/${storyId}/comments`,
    VOTES: (storyId: string) => `/stories/${storyId}/votes`,
    COMMENT_DELETE: (commentId: string) => `/stories/comments/${commentId}`,
  },

  CATEGORIES: {
    BASE: "/categories",
    BY_ID: (categoryId: string) => `/categories/${categoryId}`,
  },

  USERS: {
    BASE: "/users",
    BY_ID: (userId: string) => `/users/${userId}`,
  },

  ADMIN: {
    UPDATE_USER_ROLE: (userId: string) => `/admin/role/${userId}`,
  },
} as const;
