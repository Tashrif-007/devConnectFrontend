export const UI_MESSAGES = {
  BUTTONS: {
    CANCEL: "Cancel",
    PUBLISH_POST: "Publish Post",
    PUBLISHING: "Publishing...",
    SAVE: "Save",
    DELETE: "Delete",
    UPDATE: "Update",
    CREATE: "Create",
    CONFIRM: "Confirm",
    CLOSE: "Close",
    LOGIN: "Login",
    LOGGING_IN: "Logging in...",
  },

  PAGE_TITLES: {
    CREATE_POST: "Create Your Post",
    EDIT_POST: "Edit Post",
    FEED: "Your Feed",
  },

  SUCCESS: {
    USER_DELETED: "User deleted successfully",
    CATEGORY_DELETED: "Category deleted successfully",
    POST_CREATED: "Post created successfully",
    POST_UPDATED: "Post updated successfully",
    POST_DELETED: "Post deleted successfully",
    COMMENT_CREATED: "Comment posted successfully",
    CATEGORY_CREATED: "Category created successfully",
  },

  ERROR: {
    FAILED_TO_FETCH_STORIES: "Failed to fetch stories",
    FAILED_TO_FETCH_CATEGORIES: "Failed to fetch categories",
    FAILED_TO_CREATE_CATEGORY: "Failed to create category",
    FAILED_TO_DELETE_CATEGORY: "Failed to delete category",
    USER_NOT_FOUND: "User not found",
    NO_STORIES_POSTED: "No stories posted yet",
    FAILED_TO_FETCH_USERS: "Failed to fetch users",
  },

  EMPTY_STATE: {
    NO_STORIES: "No stories posted yet",
  },
} as const;
