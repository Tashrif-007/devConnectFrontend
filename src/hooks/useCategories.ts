import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categorySlice";
import type { RootState, AppDispatch } from "../store/store";

export const useCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  return { categories, loading, error };
};
