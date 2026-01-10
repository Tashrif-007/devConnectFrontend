import React from "react";
import { Header } from "../ui";
import ReactMarkdown from "react-markdown";
import styles from "./PostCardContent.module.css";

interface PostCardContentProps {
  title: string;
  body: string;
}

const PostCardContent: React.FC<PostCardContentProps> = ({ title, body }) => {
  return (
    <>
      <Header level={2} value={title} className={styles.title} />
      <div className={styles.body}>
        <ReactMarkdown
          components={{
            strong: ({ ...props }) => (
              <strong className="font-bold" {...props} />
            ),
            em: ({ ...props }) => <em className="italic" {...props} />,
            code: ({ ...props }) => (
              <code
                className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono text-sm"
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul className="list-disc list-inside mb-2" {...props} />
            ),
            li: ({ ...props }) => <li className="mb-1 ml-2" {...props} />,
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default PostCardContent;
