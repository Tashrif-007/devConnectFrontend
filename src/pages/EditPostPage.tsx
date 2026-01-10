import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditStoryForm from "../components/story/form/EditStoryForm";
import StoryDetailSkeleton from "../components/story/detail/StoryDetailSkeleton";
import StoryError from "../components/story/shared/StoryError";
import { useGetStoryDetail } from "../queries";
import styles from "./EditPostPage.module.css";

const EditPostPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const { story, loading, error } = useGetStoryDetail(storyId);

  const handleClose = () => {
    navigate(`/stories/${storyId}`);
  };

  return (
    <div className={styles.container}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {loading && <StoryDetailSkeleton />}
        {error && <StoryError error={error} />}
        {story && <EditStoryForm story={story} onClose={handleClose} />}
      </main>
    </div>
  );
};

export default EditPostPage;
