import React from "react";
import styles from './PostTags.module.css';

interface PostTagsProps {
  tags: string[];
}

const PostTags: React.FC<PostTagsProps> = ({ tags }) => {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default PostTags;
