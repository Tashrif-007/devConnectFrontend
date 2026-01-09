import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import EditStoryForm from "../components/story/EditStoryForm";
import StoryDetailSkeleton from "../components/story/StoryDetailSkeleton";
import StoryError from "../components/story/StoryError";
import { useGetStoryDetail } from "../queries";

const EditPostPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const { story, loading, error } = useGetStoryDetail(storyId);

  const handleClose = () => {
    navigate(`/stories/${storyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {loading && <StoryDetailSkeleton />}
        {error && <StoryError error={error} />}
        {story && <EditStoryForm story={story} onClose={handleClose} />}
      </main>
    </div>
  );
};

export default EditPostPage;
