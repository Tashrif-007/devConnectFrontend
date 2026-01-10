import React from "react";
import { Paragraph } from "../ui";
import styles from "./PostCardTags.module.css";

interface PostCardTagsProps {
  tags: string[];
  maxTags?: number;
}

const PostCardTags: React.FC<PostCardTagsProps> = ({ tags, maxTags = 3 }) => {
  if (tags.length === 0) return null;
  return (
    <div className={styles.container}>
      {tags.slice(0, maxTags).map((tag) => (
        <Paragraph key={tag} className={styles.tag}>
          #{tag}
        </Paragraph>
      ))}
    </div>
  );
};

export default PostCardTags;
