import type {
  UserOrderByValue,
  StoryOrderByValue,
  SortByValue,
} from "../types";

export const SORT_BY_OPTIONS = [
  { label: "Ascending", value: "ASC" as const },
  { label: "Descending", value: "DESC" as const },
];

export const USER_ORDER_BY_OPTIONS = [
  { label: "Username", value: "user.username" as const },
  { label: "Name", value: "user.name" as const },
  { label: "Email", value: "user.email" as const },
  { label: "Join Date", value: "user.joinDate" as const },
];

export const STORY_ORDER_BY_OPTIONS = [
  { label: "Title", value: "story.title" as const },
  { label: "Created At", value: "story.createdAt" as const },
];

export const DEFAULT_SORT_BY: SortByValue = "ASC";
export const DEFAULT_USER_ORDER_BY: UserOrderByValue = "user.joinDate";
export const DEFAULT_STORY_ORDER_BY: StoryOrderByValue = "story.createdAt";

export const VALID_USER_ORDER_BY_VALUES: UserOrderByValue[] = [
  "user.joinDate",
  "user.username",
  "user.name",
  "user.email",
];

export const VALID_STORY_ORDER_BY_VALUES: StoryOrderByValue[] = [
  "story.createdAt",
  "story.title",
];

export const VALID_SORT_BY_VALUES: SortByValue[] = ["ASC", "DESC"];

export const isValidOrderByForTab = (
  tab: "users" | "posts",
  orderBy: string | undefined
): boolean => {
  if (!orderBy) return true;

  if (tab === "users") {
    return VALID_USER_ORDER_BY_VALUES.includes(orderBy as UserOrderByValue);
  } else {
    return VALID_STORY_ORDER_BY_VALUES.includes(orderBy as StoryOrderByValue);
  }
};

export const isValidSortBy = (sortBy: string | undefined): boolean => {
  if (!sortBy) return true;
  return VALID_SORT_BY_VALUES.includes(sortBy as SortByValue);
};
