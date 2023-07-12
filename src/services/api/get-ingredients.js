import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./utils";

export const getIngredients = createAsyncThunk(
  "ingredients/getIngredients",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/ingredients`
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
