import { useState } from "react";
import InputField from "../common/InputField";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="hidden md:flex flex-1 max-w-md mx-auto">
      <div className="relative w-full group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="pl-10">
          <InputField
            label=""
            name="search"
            placeholder="Search posts or developers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
