import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { useStoryDetail } from "../hooks/useStoryDetail";
import StoryDetailHeader from "../components/story/StoryDetailHeader";
import StoryDetailCard from "../components/story/StoryDetailCard";
import StoryDetailSkeleton from "../components/story/StoryDetailSkeleton";
import StoryError from "../components/story/StoryError";
import { CommentsSection } from "../components/comments";

const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const location = useLocation();
  const { story, loading, error } = useStoryDetail(storyId);

  const handleShare = () => {
    const url = `${window.location.origin}${location.pathname}`;
    navigator.clipboard.writeText(url);
    alert("Story link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {loading && <StoryDetailSkeleton />}
        {error && <StoryError error={error} />}
        {story && (
          <>
            <StoryDetailHeader />
            <StoryDetailCard story={story} onShare={handleShare} />
            <CommentsSection storyId={storyId!} />
          </>
        )}
      </main>
    </div>
  );
};

export default StoryDetailPage;
