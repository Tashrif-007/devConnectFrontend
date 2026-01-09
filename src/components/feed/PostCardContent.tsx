import React from "react";
import { Header } from "../ui";
import ReactMarkdown from "react-markdown";

interface PostCardContentProps {
  title: string;
  body: string;
}

const PostCardContent: React.FC<PostCardContentProps> = ({ title, body }) => {
  return (
    <>
      <Header
        level={2}
        value={title}
        className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2"
      />
      <div className="text-gray-700 text-md line-clamp-3 mb-4">
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
