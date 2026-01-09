import React from "react";
import ReactMarkdown from "react-markdown";

interface PostBodyProps {
  body: string;
}

const PostBody: React.FC<PostBodyProps> = ({ body }) => {
  return (
    <div className="mb-6 text-gray-700 text-base">
      <ReactMarkdown
        components={{
          strong: ({ ...props }) => <strong className="font-bold" {...props} />,
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
  );
};

export default PostBody;
