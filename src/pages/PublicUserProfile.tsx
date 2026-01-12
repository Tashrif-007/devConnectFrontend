import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileInfo from "../components/profile/info/ProfileInfo";
import PostCard from "../components/feed/PostCard";
import { useGetUserProfile } from "../hooks/useGetUserProfile";
import { useUserStories } from "../hooks/useUserStories";
import { useAuth } from "../hooks/useAuth";
import { UI_MESSAGES } from "../constants";

const PublicUserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { user: loggedInUser } = useAuth();
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useGetUserProfile(userId || "");
  const {
    stories,
    loading: storiesLoading,
    error: storiesError,
    fetchUserStories,
  } = useUserStories();

  // Check if the logged-in user is viewing their own profile
  const isOwnProfile = loggedInUser?.userId === userId;

  useEffect(() => {
    if (userId) {
      fetchUserStories(userId);
    }
  }, [userId, fetchUserStories]);

  if (userLoading) {
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
          </div>
        </main>
      </div>
    );
  }

  if (userError || !user) {
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {userError || UI_MESSAGES.ERROR.USER_NOT_FOUND}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProfileInfo user={user} isOwnProfile={isOwnProfile} />
        {storiesError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {storiesError}
          </div>
        )}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Posted Stories ({stories.length})
          </h2>
          {storiesLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 animate-pulse"
                >
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          ) : stories.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-12">
              <div className="text-center">
                <p className="text-gray-600 text-lg">
                  {UI_MESSAGES.EMPTY_STATE.NO_STORIES}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  This user hasn't shared any thoughts yet.
                </p>
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

export default PublicUserProfile;
