import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../ui/InputField";
import { FiSearch } from "react-icons/fi";
import { Button } from "../../ui";
import { ROUTES } from "../../../constants";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(
        `${ROUTES.APP.SEARCH}?find=${encodeURIComponent(searchQuery)}&tab=users`
      );
      setSearchQuery("");
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(
        `${ROUTES.APP.SEARCH}?find=${encodeURIComponent(searchQuery)}&tab=users`
      );
      setSearchQuery("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} onKeyDown={handleKeyDown}>
        <div className={styles.inputWrapper}>
          <InputField
            label=""
            name="search"
            placeholder="Search posts or developers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
          />
        </div>
        <Button onClick={handleSearchClick} className={styles.searchButton}>
          <FiSearch />
        </Button>
      </div>
    </div>
  );
}
