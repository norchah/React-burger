import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./utils";

export const sendEmail = createAsyncThunk(
  "auth/requestPass",
  async function ({ email }, { rejectWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/password-reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Error "`${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);