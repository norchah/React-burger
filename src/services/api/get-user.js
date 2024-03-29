import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL, accessTokenFromStorage, fetchWithRefresh } from "./utils";

export const getUser = createAsyncThunk(
  "auth/getUser",
  async function (_, { rejectWithValue }) {
    try {
      return await fetchWithRefresh(`${AUTH_URL}/user`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
          authorization: accessTokenFromStorage,
        },
      }).then(data => {
        return data
      })
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
