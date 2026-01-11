import React from "react";
import PostAuthor from "../../modals/post/PostAuthor";
import PostTitle from "../../modals/post/PostTitle";
import PostTags from "../../modals/post/PostTags";
import PostBody from "../../modals/post/PostBody";
import PostSummary from "../../modals/post/PostSummary";
import styles from "./StoryDetailContent.module.css";
import type { Story } from "../../../interfaces";

interface StoryDetailContentProps {
  story: Story;
}

const StoryDetailContent: React.FC<StoryDetailContentProps> = ({ story }) => {
  return (
    <div className={styles["container"]}>
      <PostAuthor user={story.user} createdAt={story.createdAt} />
      <PostTitle title={story.title} className="text-3xl" />
      <PostTags tags={story.categoryNames} />
      <div className={styles["divider"]}></div>
      <PostBody body={story.body} />
      {story.summary && <PostSummary summary={story.summary} />}
    </div>
  );
};

export default StoryDetailContent;
