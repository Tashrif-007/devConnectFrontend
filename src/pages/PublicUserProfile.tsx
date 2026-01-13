import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileInfo from "../components/profile/info/ProfileInfo";
import PostCard from "../components/feed/PostCard";
import { useGetUserProfile } from "../hooks/useGetUserProfile";
import { useUserStories } from "../hooks/useUserStories";
import { useAuth } from "../hooks/useAuth";
import { UI_MESSAGES, PUBLIC_USER_PROFILE } from "../constants";
import styles from "./PublicUserProfile.module.css";

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

  const isOwnProfile = loggedInUser?.userId === userId;

  useEffect(() => {
    if (userId) {
      fetchUserStories(userId);
    }
  }, [userId, fetchUserStories]);

  if (userLoading) {
    return (
      <div className={styles.container}>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className={styles.skeletonBanner}></div>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonContent}></div>
          </div>
        </main>
      </div>
    );
  }

  if (userError || !user) {
    return (
      <div className={styles.container}>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className={styles.errorMessage}>
            {userError || UI_MESSAGES.ERROR.USER_NOT_FOUND}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProfileInfo user={user} isOwnProfile={isOwnProfile} />
        {storiesError && (
          <div className={styles.errorMessage}>{storiesError}</div>
        )}
        <div>
          <h2 className={styles.storyTitle}>
            Posted Stories ({stories.length})
          </h2>
          {storiesLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.skeletonCard}>
                  <div className={styles.skeletonCardTitle}></div>
                  <div className={styles.skeletonCardText}></div>
                  <div className={styles.skeletonCardTextEnd}></div>
                </div>
              ))}
            </div>
          ) : stories.length === 0 ? (
            <div className={styles.contentCard}>
              <div className="text-center">
                <p className={styles.contentText}>
                  {UI_MESSAGES.EMPTY_STATE.NO_STORIES}
                </p>
                <p className={styles.contentDate}>
                  {PUBLIC_USER_PROFILE.NO_STORIES_MESSAGE}
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
