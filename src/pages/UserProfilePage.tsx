import React, { useEffect } from "react";
import ProfileInfo from "../components/profile/ProfileInfo";
import PostCard from "../components/feed/PostCard";
import { useAuth } from "../hooks/useAuth";
import { useUserStories } from "../hooks/useUserStories";
import { Header } from "../components/ui/Header";
import { Paragraph } from "../components/ui/Paragraph";

const UserProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { stories, loading, error, fetchUserStories } = useUserStories();

  useEffect(() => {
    if (user?.userId) {
      fetchUserStories(user.userId);
    }
  }, [user?.userId, fetchUserStories]);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProfileInfo user={user!} />
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
        <div>
          <Header
            level={2}
            className="text-xl font-bold text-gray-900 mb-6"
            value={`Posts (${stories.length.toString()})`}
          />
          {loading ? (
            <Spinner color="border-black" size="lg" />
          ) : stories.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-12">
              <div className="text-center">
                <Paragraph className="text-gray-600 text-lg">
                  No stories posted yet
                </Paragraph>
                <Paragraph className="text-gray-400 text-sm mt-2">
                  Start sharing your thoughts with the community!
                </Paragraph>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {stories.map((story) => (
                <PostCard key={story.storyId} story={story} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;
