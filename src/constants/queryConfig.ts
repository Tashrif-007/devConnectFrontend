

export const QUERY_CONFIG = {
  QUERIES: {
    STALE_TIME: 5 * 60 * 1000, 
    GC_TIME: 10 * 60 * 1000,
    RETRY: 1,
    REFETCH_ON_WINDOW_FOCUS: false,
  },

  STALE_TIMES: {
    STORIES: 2 * 60 * 1000, 
    USERS: 5 * 60 * 1000, 
    CATEGORIES: 10 * 60 * 1000, 
    COMMENTS: 1 * 60 * 1000, 
    USER_PROFILE: 5 * 60 * 1000, 
  },

  GC_TIMES: {
    STORIES: 5 * 60 * 1000, 
    USERS: 10 * 60 * 1000, 
    CATEGORIES: 15 * 60 * 1000, 
    COMMENTS: 5 * 60 * 1000, 
    USER_PROFILE: 10 * 60 * 1000, 
  },

  PAGINATION: {
    ITEMS_PER_PAGE: 5,
    DEFAULT_PAGE: 1,
  },

  QUERY_KEYS: {
    STORIES: "stories",
    USERS: "users",
    CATEGORIES: "categories",
    COMMENTS: "comments",
    USER_PROFILE: "userProfile",
  },
} as const;
