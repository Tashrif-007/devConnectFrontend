import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../ui/InputField";
import { FiSearch } from "react-icons/fi";
import { Button } from "../ui";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?find=${encodeURIComponent(searchQuery)}&tab=users`);
      setSearchQuery("");
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/search?find=${encodeURIComponent(searchQuery)}&tab=users`);
      setSearchQuery("");
    }
  };

  return (
    <div className="hidden md:flex flex-1 max-w-md mx-auto">
      <div className="relative w-full group" onKeyDown={handleKeyDown}>
        <div className="pr-10">
          <InputField
            label=""
            name="search"
            placeholder="Search posts or developers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
          />
        </div>
        <Button
          onClick={handleSearchClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:opacity-75 transition-opacity"
        >
          <FiSearch />
        </Button>
      </div>
    </div>
  );
}
