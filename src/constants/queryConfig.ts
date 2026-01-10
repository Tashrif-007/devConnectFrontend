/**
 * React Query Configuration
 * Default settings and query configurations
 */

export const QUERY_CONFIG = {
  // Default query options
  QUERIES: {
    STALE_TIME: 5 * 60 * 1000, // 5 minutes
    GC_TIME: 10 * 60 * 1000, // 10 minutes
    RETRY: 1,
    REFETCH_ON_WINDOW_FOCUS: false,
  },

  // Specific query stale times
  STALE_TIMES: {
    STORIES: 2 * 60 * 1000, // 2 minutes
    USERS: 5 * 60 * 1000, // 5 minutes
    CATEGORIES: 10 * 60 * 1000, // 10 minutes
    COMMENTS: 1 * 60 * 1000, // 1 minute
    USER_PROFILE: 5 * 60 * 1000, // 5 minutes
  },

  // Specific query GC times
  GC_TIMES: {
    STORIES: 5 * 60 * 1000, // 5 minutes
    USERS: 10 * 60 * 1000, // 10 minutes
    CATEGORIES: 15 * 60 * 1000, // 15 minutes
    COMMENTS: 5 * 60 * 1000, // 5 minutes
    USER_PROFILE: 10 * 60 * 1000, // 10 minutes
  },

  // Pagination
  PAGINATION: {
    ITEMS_PER_PAGE: 5,
    DEFAULT_PAGE: 1,
  },

  // Query keys
  QUERY_KEYS: {
    STORIES: "stories",
    USERS: "users",
    CATEGORIES: "categories",
    COMMENTS: "comments",
    USER_PROFILE: "userProfile",
  },
} as const;
