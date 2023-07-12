import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL } from "./utils";

export const registration = createAsyncThunk(
  "auth/registration",
  async function ({ email, password, name }, { rejectWithValue }) {
    try {
      const res = await fetch(`${AUTH_URL}/register`, {
        method: "POST",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      });
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
