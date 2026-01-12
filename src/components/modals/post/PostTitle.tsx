import React from "react";
import styles from "./PostTitle.module.css";

interface PostTitleProps {
  title: string;
  className?: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ title, className }) => {
  const titleClass = className
    ? `${className} font-bold text-gray-900 mb-4`
    : styles.title;
  return <h1 className={titleClass}>{title}</h1>;
};

export default PostTitle;
