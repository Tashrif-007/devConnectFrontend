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
              <strong className={styles.strong} {...props} />
            ),
            em: ({ ...props }) => <em className={styles.em} {...props} />,
            code: ({ ...props }) => <code className={styles.code} {...props} />,
            ul: ({ ...props }) => <ul className={styles.ul} {...props} />,
            li: ({ ...props }) => <li className={styles.li} {...props} />,
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default PostCardContent;
