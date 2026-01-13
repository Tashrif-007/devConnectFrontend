import React from "react";
import { useParams } from "react-router-dom";
import StoryDetailHeader from "../components/story/detail/StoryDetailHeader";
import StoryDetailCard from "../components/story/detail/StoryDetailCard";
import StoryDetailSkeleton from "../components/story/detail/StoryDetailSkeleton";
import StoryError from "../components/story/shared/StoryError";
import { CommentsSection } from "../components/comments";
import { useGetStoryDetail } from "../queries";
import styles from "./StoryDetailPage.module.css";

const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const { story, loading, error } = useGetStoryDetail(storyId);

  return (
    <div className={styles.container}>
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
