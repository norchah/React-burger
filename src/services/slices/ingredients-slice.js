import { createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "./api/get-ingredients";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    status: "init",
    error: null,
  },
  reducers: {
    increaseItem(state, action) {
      state.ingredients.map((item) =>
        item._id === action.payload ? (item.__v += 1) : item
      );
    },
    decreaseItem(state, action) {
      state.ingredients.map((item) =>
        item._id === action.payload ? (item.__v -= 1) : item
      );
    },
    clearBunCount(state) {
      state.ingredients.map((item) =>
        item.type === "bun" ? (item.__v = 0) : item
      );
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getIngredients.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.status = "succes";
        state.error = null;
        state.ingredients = action.payload.data;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      }),
});

export const { reducer: ingredientsReducer, actions: ingredientsActions } =
  ingredientsSlice;
