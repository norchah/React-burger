import { createAsyncThunk } from "@reduxjs/toolkit";

export const getIngredients = createAsyncThunk(
    "ingredients/getIngredients",
    async function (_, { rejectWithValue }) {
      try {
        const res = await fetch(
          "https://norma.nomoreparties.space/api/ingredients"
        );
        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );