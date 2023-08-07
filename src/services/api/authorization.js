import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL } from "./utils";

export const authorization = createAsyncThunk(
  "auth/authorization",
  async function ({ email, password }, { rejectWithValue }) {
    try {
      const res = await fetch(
        `${AUTH_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
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
