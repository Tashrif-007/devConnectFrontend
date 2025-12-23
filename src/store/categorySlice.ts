import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type Category, categoryService } from "../services/categoryService";

export interface CategoryState {
  items: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await categoryService.fetchCategories();
      return categories;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return rejectWithValue(message);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
