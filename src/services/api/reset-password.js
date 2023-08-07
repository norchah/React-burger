import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./utils";


export const resetPassword = createAsyncThunk(
  "password/resetPass",
  async function ({ password, token }, { rejectWithValue }) {
    try {
      const res = await fetch(
        `${BASE_URL}/password-reset/reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            passowrd: password,
            token: token,
          }),
        }
      );
      if (!res.ok) {
          throw new Error ('Error '`${res.status}`);
      };
      const data = await res.json();
      return data;
    } catch (error){
        return rejectWithValue(error.message);
    }
  }
);