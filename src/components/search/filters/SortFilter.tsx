import React from "react";
import {
  SORT_BY_OPTIONS,
  USER_ORDER_BY_OPTIONS,
  STORY_ORDER_BY_OPTIONS,
} from "../../../constants/searchFilters";
import type { SortByValue, OrderByValue } from "../../../types";
import styles from "./SortFilter.module.css";

interface SortFilterProps {
  tab: "users" | "posts";
  sortBy?: SortByValue;
  orderBy?: OrderByValue;
  onSortByChange: (value: string) => void;
  onOrderByChange: (value: string) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({
  tab,
  sortBy,
  orderBy,
  onSortByChange,
  onOrderByChange,
}) => {
  const orderByOptions =
    tab === "users" ? USER_ORDER_BY_OPTIONS : STORY_ORDER_BY_OPTIONS;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <label htmlFor="sortBy" className={styles.label}>
          Sort By
        </label>
        <select
          id="sortBy"
          value={sortBy || ""}
          onChange={(e) => onSortByChange(e.target.value)}
          className={styles.select}
        >
          <option value="">Default</option>
          {SORT_BY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.section}>
        <label htmlFor="orderBy" className={styles.label}>
          Order By
        </label>
        <select
          id="orderBy"
          value={orderBy || ""}
          onChange={(e) => onOrderByChange(e.target.value)}
          className={styles.select}
        >
          <option value="">Default</option>
          {orderByOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
