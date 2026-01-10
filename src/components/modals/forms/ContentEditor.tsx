import React, { useState, type ForwardedRef } from "react";
import MarkdownToolbar from "./MarkdownToolbar";
import ContentTabs from "./ContentTabs";
import TabButton from "../../ui/TabButton";
import styles from './ContentEditor.module.css';

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
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        Content
      </label>
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
        <MarkdownToolbar onInsert={onInsertMarkdown} />

        <div className="border-t border-gray-300">
          <div className="flex border-b border-gray-200 bg-gray-100">
            <TabButton
              label="Write"
              isActive={activeTab === "write"}
              onClick={() => setActiveTab("write")}
              variant="content"
            />
            <TabButton
              label="Preview"
              isActive={activeTab === "preview"}
              onClick={() => setActiveTab("preview")}
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
