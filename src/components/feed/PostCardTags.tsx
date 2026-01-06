import React from "react";
import { Paragraph } from "../common";

interface PostCardTagsProps {
  tags: string[];
  maxTags?: number;
}

const PostCardTags: React.FC<PostCardTagsProps> = ({ tags, maxTags = 3 }) => {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, maxTags).map((tag) => (
        <Paragraph
          key={tag}
          className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded"
        >
          #{tag}
        </Paragraph>
      ))}
    </div>
  );
};

export default PostCardTags;
