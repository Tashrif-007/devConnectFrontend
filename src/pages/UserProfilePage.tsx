import React, { useEffect } from "react";
import ProfileInfo from "../components/profile/ProfileInfo";
import PostCard from "../components/feed/PostCard";
import { useAuth } from "../hooks/useAuth";
import { useUserStories } from "../hooks/useUserStories";
import { Header, Paragraph } from "../components/ui";
import Spinner from "../components/ui/Spinner";
import { USER_PROFILE_PAGE } from "../constants";
import styles from "./UserProfilePage.module.css";

const UserProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { stories, loading, error, fetchUserStories } = useUserStories();

  useEffect(() => {
    if (user?.userId) {
      fetchUserStories(user.userId);
    }
  }, [user?.userId, fetchUserStories]);

  return (
    <div className={styles.container}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {profileLoading ? (
          <div className="animate-pulse">
            <div className={styles.skeletonBanner}></div>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonContent}></div>
          </div>
        ) : (
          <>
            <ProfileInfo user={user!} />
            {error && <div className={styles.errorMessage}>{error}</div>}
            <div>
              <Header
                level={2}
                className={styles.contentTitle}
                value={`${USER_PROFILE_PAGE.POSTS_HEADER} (${stories.length})`}
              />
              {loading ? (
                <Spinner color="border-black" size="lg" />
              ) : stories.length === 0 ? (
                <div className={styles.contentCard}>
                  <div className="text-center">
                    <Paragraph className={styles.contentText}>
                      {USER_PROFILE_PAGE.NO_STORIES_MESSAGE}
                    </Paragraph>
                    <Paragraph className={styles.contentDate}>
                      {USER_PROFILE_PAGE.NO_STORIES_HINT}
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
