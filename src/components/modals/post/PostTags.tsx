import React from "react";
import styles from "./PostTags.module.css";

interface PostTagsProps {
  tags: string[];
}

const PostTags: React.FC<PostTagsProps> = ({ tags }) => {
  if (tags.length === 0) return null;

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default PostTags;
