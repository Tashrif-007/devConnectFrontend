import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./PostBody.module.css";

interface PostBodyProps {
  body: string;
}

const PostBody: React.FC<PostBodyProps> = ({ body }) => {
  return (
    <div className={styles.container}>
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
  );
};

export default PostBody;
