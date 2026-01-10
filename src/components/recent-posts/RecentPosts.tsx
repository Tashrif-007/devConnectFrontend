import { useNavigate } from "react-router-dom";
import PostCard from "../feed/PostCard";
import { useGetStories } from "../../queries/stories/getStories";
import { PostCardSkeletonLoader } from "../feed/PostCardSkeleton";
import { ROUTES } from "../../constants";
import styles from './RecentPosts.module.css';

export default function RecentPosts() {
  const navigate = useNavigate();
  const { stories, loading } = useGetStories(1, undefined);

  const recentPosts = stories.slice(0, 3);
  return (
    <section className="w-full bg-background-light transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-primary font-bold tracking-wide uppercase text-sm mb-2">
              Community Feed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Fresh from the community
            </h2>
          </div>
          <button
            onClick={() => navigate(ROUTES.PUBLIC.FEED)}
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
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <>
              <PostCardSkeletonLoader />
              <PostCardSkeletonLoader />
              <PostCardSkeletonLoader />
            </>
          ) : (
            recentPosts.map((story) => (
              <PostCard key={story.storyId} story={story} />
            ))
          )}
        </div>

        <div className="md:hidden mt-8 text-center">
          <button
            onClick={() => navigate("/feed")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all"
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
          </button>
        </div>
      </div>
    </section>
  );
}
