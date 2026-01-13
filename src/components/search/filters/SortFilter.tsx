import React from "react";
import {
  SORT_BY_OPTIONS,
  USER_ORDER_BY_OPTIONS,
  STORY_ORDER_BY_OPTIONS,
} from "../../../constants/search";
import type { SortByValue, OrderByValue } from "../../../types/search";
import styles from "./SortFilter.module.css";

interface SortFilterProps {
  tab: "users" | "posts";
  sortBy: SortByValue;
  orderBy: OrderByValue;
  onSortByChange: (value: SortByValue) => void;
  onOrderByChange: (value: OrderByValue) => void;
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
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as SortByValue)}
          className={styles.select}
        >
          {SORT_BY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
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
          value={orderBy}
          onChange={(e) => onOrderByChange(e.target.value as OrderByValue)}
          className={styles.select}
        >
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
