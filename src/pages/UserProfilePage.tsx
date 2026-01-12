import React, { useEffect } from "react";
import ProfileInfo from "../components/profile/info/ProfileInfo";
import PostCard from "../components/feed/PostCard";
import { useAuth } from "../hooks/useAuth";
import { useUserStories } from "../hooks/useUserStories";
import { useGetUserProfile } from "../hooks/useGetUserProfile";
import { Header, Paragraph } from "../components/ui";
import Spinner from "../components/ui/Spinner";

const UserProfilePage: React.FC = () => {
  const { user: authUser } = useAuth();
  const { user: fullUserProfile, loading: profileLoading } = useGetUserProfile(
    authUser?.userId || ""
  );
  const { stories, loading, error, fetchUserStories } = useUserStories();
  const user = fullUserProfile || authUser;

  useEffect(() => {
    if (authUser?.userId) {
      fetchUserStories(authUser.userId);
    }
  }, [authUser?.userId, fetchUserStories]);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {profileLoading ? (
          <div className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
};

export default UserProfilePage;
