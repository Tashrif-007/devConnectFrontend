import React, { useEffect } from "react";
import ProfileInfo from "../components/profile/info/ProfileInfo";
import PostCard from "../components/feed/PostCard";
import { useAuth } from "../hooks/useAuth";
import { useUserStories } from "../hooks/useUserStories";
import { useGetUserProfile } from "../hooks/useGetUserProfile";
import { Header, Paragraph } from "../components/ui";
import Spinner from "../components/ui/Spinner";
import styles from "./UserProfilePage.module.css";

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
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}
            <div>
              <Header
                level={2}
                className={styles.contentTitle}
                value={`Posts (${stories.length.toString()})`}
              />
              {loading ? (
                <Spinner color="border-black" size="lg" />
              ) : stories.length === 0 ? (
                <div className={styles.contentCard}>
                  <div className="text-center">
                    <Paragraph className={styles.contentText}>
                      No stories posted yet
                    </Paragraph>
                    <Paragraph className={styles.contentDate}>
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
