import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNumberOfOrder = createAsyncThunk(
    "modal/getNumberOfOrder",
    async function (ingredientsList, { rejectWithValue }) {
      try {
        const res = await fetch("https://norma.nomoreparties.space/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ingredients: ingredientsList,
            }),
          })
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