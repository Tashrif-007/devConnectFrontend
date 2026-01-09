import React, { useState, type ForwardedRef } from "react";
import MarkdownToolbar from "./MarkdownToolbar";
import ContentTabs from "./ContentTabs";
import TabButton from "../ui/TabButton";

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
            <button
              type="button"
              onClick={() => setActiveTab("write")}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "write"
                  ? "text-black-600 border-b-2 border-black-600 bg-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Write
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "preview"
                  ? "text-black-600 border-b-2 border-black-600 bg-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Preview
            </button>
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
