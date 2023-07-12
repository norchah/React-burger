import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, refreshTokenFromStorage } from './utils';

export const logout = createAsyncThunk(
  "auth/logout",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: refreshTokenFromStorage,
          }),
        }
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
