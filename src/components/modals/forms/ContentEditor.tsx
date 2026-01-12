import React, { useState, type ForwardedRef } from "react";
import { CONTENT_TABS } from "../../../constants/modals";
import MarkdownToolbar from "./MarkdownToolbar";
import ContentTabs from "./ContentTabs";
import TabButton from "../../ui/TabButton";
import styles from "./ContentEditor.module.css";
import type { ContentTabType } from "../../../types/story";

interface ContentEditorProps {
  content: string;
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onInsertMarkdown: (before: string, after?: string) => void;
  textareaRef: ForwardedRef<HTMLTextAreaElement>;
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  content,
  onContentChange,
  onInsertMarkdown,
  textareaRef,
}) => {
  const [activeTab, setActiveTab] = useState<ContentTabType>(
    CONTENT_TABS.WRITE
  );

  return (
    <div>
      <label className={styles.label}>Content</label>
      <div className={styles.container}>
        <MarkdownToolbar onInsert={onInsertMarkdown} />

        <div className={styles.innerContainer}>
          <div className={styles.tabsHeader}>
            <TabButton
              label="Write"
              isActive={activeTab === CONTENT_TABS.WRITE}
              onClick={() => setActiveTab(CONTENT_TABS.WRITE)}
              variant="content"
            />
            <TabButton
              label="Preview"
              isActive={activeTab === CONTENT_TABS.PREVIEW}
              onClick={() => setActiveTab(CONTENT_TABS.PREVIEW)}
              variant="content"
            />
          </div>

          <ContentTabs
            activeTab={activeTab}
            content={content}
            onContentChange={onContentChange}
            textareaRef={textareaRef}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
