import React from "react";

interface TitleInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput: React.FC<TitleInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        Post Title
      </label>
      <input
        type="text"
        name="title"
        value={value}
        onChange={onChange}
        placeholder="Enter an engaging title..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default TitleInput;
