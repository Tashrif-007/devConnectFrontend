/**
 * Admin and User Management Configuration
 * Settings for user management, pagination, sorting, and date formatting
 */

export const USER_MANAGEMENT_CONFIG = {
  ITEMS_PER_PAGE: 5,
  DEFAULT_SORT_BY: "DESC",
  DEFAULT_ORDER_BY: "user.joinDate",
  DATE_FORMAT_OPTIONS: {
    year: "numeric" as const,
    month: "short" as const,
    day: "numeric" as const,
  },
} as const;
