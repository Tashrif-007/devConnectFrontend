import React from "react";
import { useParams} from "react-router-dom";
import StoryDetailHeader from "../components/story/StoryDetailHeader";
import StoryDetailCard from "../components/story/StoryDetailCard";
import StoryDetailSkeleton from "../components/story/StoryDetailSkeleton";
import StoryError from "../components/story/StoryError";
import { CommentsSection } from "../components/comments";
import { useGetStoryDetail } from "../queries";

const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const { story, loading, error } = useGetStoryDetail(storyId);


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {loading && <StoryDetailSkeleton />}
        {error && <StoryError error={error} />}
        {story && (
          <>
            <StoryDetailHeader />
            <StoryDetailCard story={story} />
            <CommentsSection storyId={storyId!} />
          </>
        )}
      </main>
    </div>
  );
};

export default StoryDetailPage;
