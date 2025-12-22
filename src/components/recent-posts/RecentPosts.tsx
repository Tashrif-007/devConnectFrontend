import PostCard from "./PostCard";

const dummyPosts = [
  {
    tag: "React",
    tagColor: "bg-purple-200",
    author: "Sarah Jenkins",
    timeAgo: "1 day ago",
    title: "Understanding React Server Components in 2024",
    description:
      "Server components are changing how we build modern web apps. Here's a deep dive into the architecture and benefits...",
    likes: 42,
    comments: 12,
  },
  {
    tag: "Rust",
    tagColor: "bg-cyan-200",
    author: "Alex Chen",
    timeAgo: "4 days ago",
    title: "Why I switched from Go to Rust for my backend services",
    description:
      "Memory safety without garbage collection was the main selling point, but the developer experience surprised me...",
    likes: 124,
    comments: 45,
  },
  {
    tag: "DevOps",
    tagColor: "bg-red-200",
    author: "Maria Rodriguez",
    timeAgo: "6 days ago",
    title: "Mastering Docker Compose for local development environments",
    description:
      "Stop installing dependencies globally. Learn how to containerize your entire stack for consistent development...",
    likes: 89,
    comments: 23,
  },
];

export default function RecentPosts() {
  return (
    <section className="w-full bg-background-light transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-primary font-bold tracking-wide uppercase text-sm mb-2">
              Community Feed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Fresh from the community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            View all posts
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyPosts.map((post, index) => (
            <PostCard
              key={index}
              tag={post.tag}
              tagColor={post.tagColor}
              author={post.author}
              timeAgo={post.timeAgo}
              title={post.title}
              description={post.description}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all">
            View all posts
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
