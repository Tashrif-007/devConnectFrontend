export type SortByValue = "ASC" | "DESC";

export type UserOrderByValue =
  | "user.joinDate"
  | "user.username"
  | "user.name"
  | "user.email";

export type StoryOrderByValue = "story.createdAt" | "story.title";

export type OrderByValue = UserOrderByValue | StoryOrderByValue;
