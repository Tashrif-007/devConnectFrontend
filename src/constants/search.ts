import type { OrderByOption } from "../interfaces/search";
import type {
  SortByValue,
  UserOrderByValue,
  StoryOrderByValue,
} from "../types/search";

export const SORT_BY_OPTIONS: SortByValue[] = ["ASC", "DESC"];

export const USER_ORDER_BY_OPTIONS: OrderByOption[] = [
  { value: "user.joinDate", label: "Join Date" },
  { value: "user.username", label: "Username" },
  { value: "user.name", label: "Name" },
  { value: "user.email", label: "Email" },
];

export const STORY_ORDER_BY_OPTIONS: OrderByOption[] = [
  { value: "story.createdAt", label: "Created At" },
  { value: "story.title", label: "Title" },
];

export const DEFAULT_SORT_BY: SortByValue = "ASC";
export const DEFAULT_USER_ORDER_BY: UserOrderByValue = "user.joinDate";
export const DEFAULT_STORY_ORDER_BY: StoryOrderByValue = "story.createdAt";
