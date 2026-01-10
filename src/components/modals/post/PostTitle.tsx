import React from "react";
import styles from './PostTitle.module.css';

interface PostTitleProps {
  title: string;
  className?: string;
}

const PostTitle: React.FC<PostTitleProps> = ({
  title,
  className = "text-2xl",
}) => {
  return (
    <h1 className={`${className} font-bold text-gray-900 mb-4`}>{title}</h1>
  );
};

export default PostTitle;
