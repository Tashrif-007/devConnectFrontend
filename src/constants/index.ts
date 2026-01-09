export const features = [
  {
    icon: "📌",
    title: "Share Your Issues",
    description:
      "Post about coding challenges you're facing. Get solutions and advice from experienced developers in your community.",
  },
  {
    icon: "📝",
    title: "Rich Markdown Posts",
    description:
      "Write detailed posts with markdown support, syntax highlighting for 100+ languages, and code block formatting. Make your knowledge shine.",
  },
  {
    icon: "👥",
    title: "Connect with Devs",
    description:
      "Network with developers solving similar problems. Follow their journeys, learn from their experience, and build meaningful professional relationships.",
  },
  {
    icon: "💡",
    title: "Discover Solutions",
    description:
      "Browse real problems from real developers. Find solutions, best practices, and fresh perspectives from the community.",
  },
];

export const avatarUrl = "https://api.dicebear.com/9.x/pixel-art/svg";

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

export const ROLE_COLORS = {
  ADMIN: { bg: "bg-purple-100", text: "text-purple-800" },
  USER: { bg: "bg-blue-100", text: "text-blue-800" },
} as const;
