import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AUTH_URL,
  checkRes,
  refreshToken,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  accessTokenFromStorage,
} from "./utils";

export const getUser = createAsyncThunk(
  "auth/getUser",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(`${AUTH_URL}/user`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
          authorization: accessTokenFromStorage,
        },
      });
      return await checkRes(res);
    } catch (error) {
      if (error.message === "jwt expired") {
        const refreshData = refreshToken();
        if (!refreshData.ok) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem(ACCESS_TOKEN, refreshData.accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshData.refreshToken);
        const res = await fetch(`${AUTH_URL}/user`, {
          method: `GET`,
          headers: {
            "Content-Type": "application/json",
            authorization: accessTokenFromStorage,
          },
        });
        return await checkRes(res);
      }
      return rejectWithValue(error.message);
    }
  }
);
