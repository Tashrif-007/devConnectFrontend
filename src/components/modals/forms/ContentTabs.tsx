import React, { type ForwardedRef } from "react";
import ReactMarkdown from "react-markdown";
import { CONTENT_TABS } from "../../../constants/modals";
import styles from "./ContentTabs.module.css";
import type { ContentTabType } from "../../../types/story";

interface ContentTabsProps {
  activeTab: ContentTabType;
  content: string;
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaRef: ForwardedRef<HTMLTextAreaElement>;
}

const ContentTabs: React.FC<ContentTabsProps> = ({
  activeTab,
  content,
  onContentChange,
  textareaRef,
}) => {
  return (
    <div className={styles.container}>
      {activeTab === CONTENT_TABS.WRITE ? (
        <textarea
          ref={textareaRef}
          name="body"
          value={content}
          onChange={onContentChange}
          placeholder="Write your content here..."
          className={styles.textarea}
        />
      ) : (
        <div className={styles.previewContainer}>
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <h1 className={styles.h1} {...props} />,
              h2: ({ ...props }) => <h2 className={styles.h2} {...props} />,
              h3: ({ ...props }) => <h3 className={styles.h3} {...props} />,
              p: ({ ...props }) => <p className={styles.p} {...props} />,
              strong: ({ ...props }) => (
                <strong className={styles.strong} {...props} />
              ),
              em: ({ ...props }) => <em className={styles.em} {...props} />,
              code: ({ ...props }) => (
                <code className={styles.code} {...props} />
              ),
              pre: ({ ...props }) => <pre className={styles.pre} {...props} />,
              ul: ({ ...props }) => <ul className={styles.ul} {...props} />,
              ol: ({ ...props }) => <ol className={styles.ol} {...props} />,
              li: ({ ...props }) => <li className={styles.li} {...props} />,
              blockquote: ({ ...props }) => (
                <blockquote className={styles.blockquote} {...props} />
              ),
            }}
          >
            {content || "Nothing to preview..."}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ContentTabs;
