import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AUTH_URL,
  accessTokenFromStorage,
  checkRes,
  refreshToken,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from "./utils";

export const pushUser = createAsyncThunk(
  "auth/pushUser",
  async function ({ name, email, password }, { rejectWithValue }) {
    console.log(name, email, password)
    //---------------------------//
    const body = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });
    //----------------------------//
    try {
      const res = await fetch(`${AUTH_URL}/user`, {
        method: `PATCH`,
        headers: {
          "Content-Type": "application/json",
          authorization: accessTokenFromStorage,
        },
        body: body,
      });
      return await checkRes(res);
    } catch (error) {
      if (error.message === "jwt expired") {
        const refreshData = refreshToken();
        if (!refreshData.ok) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem(ACCESS_TOKEN, refreshData.accesToken);
        localStorage.setItem(REFRESH_TOKEN, refreshData.refreshToken);
        const res = await fetch(`${AUTH_URL}/user`, {
          method: `PATCH`,
          headers: {
            "Content-Type": "application/json",
            authorization: accessTokenFromStorage,
          },
          body: body,
        });
        return await checkRes(res);
      }
      return rejectWithValue(error.message);
    }
  }
);
