import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./utils";

export const getNumberOfOrder = createAsyncThunk(
  "modal/getNumberOfOrder",
  async function (ingredientsList, { rejectWithValue }) {
    try {
      const res = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients: ingredientsList,
        }),
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }
      const number = await res.json();
      return number;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
