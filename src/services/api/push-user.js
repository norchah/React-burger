import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AUTH_URL,
  accessTokenFromStorage,
  fetchWithRefresh,
} from "./utils";

export const pushUser = createAsyncThunk(
  "auth/pushUser",
  async function ({ name, email, password }, { rejectWithValue }) {
    try {
      const res = await fetchWithRefresh(`${AUTH_URL}/user`, {
        method: `PATCH`,
        headers: {
          "Content-Type": "application/json",
          authorization: accessTokenFromStorage,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
