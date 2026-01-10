import React, { type ForwardedRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from './ContentTabs.module.css';

interface ContentTabsProps {
  activeTab: "write" | "preview";
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
    <div className="min-h-54 max-h-54 rounded-b-lg overflow-hidden">
      {activeTab === "write" ? (
        <textarea
          ref={textareaRef}
          name="body"
          value={content}
          onChange={onContentChange}
          placeholder="Write your content here..."
          className="w-full h-54 p-4 border-none resize-none focus:outline-none font-mono text-sm"
        />
      ) : (
        <div className="p-4 h-54 overflow-y-auto prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-xl font-bold mt-3 mb-2" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-lg font-bold mt-2 mb-1" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-2 text-gray-800" {...props} />
              ),
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
              pre: ({ ...props }) => (
                <pre
                  className="bg-gray-100 p-3 rounded my-2 overflow-x-auto"
                  {...props}
                />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc list-inside mb-2" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal list-inside mb-2" {...props} />
              ),
              li: ({ ...props }) => <li className="mb-1 ml-2" {...props} />,
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-gray-300 pl-4 italic my-2"
                  {...props}
                />
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
