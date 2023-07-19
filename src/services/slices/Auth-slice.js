import { createSlice } from "@reduxjs/toolkit";
import { registration } from "../api/registration";
import { authorization } from "../api/authorization";
import { logout } from "../api/logout";
import { getUser } from "../api/get-user";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../api/utils";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: undefined,
    user: {},
    userName: "",
    userEmail: "",
    userPassword: "",
    error: null,
    status: "init",
    isChangeUserFields: false,
  },
  reducers: {
    setIsAuth(state) {
      state.isAuth = true;
    },
    setChangeUserFields(state) {
      state.isChangeUserFields = true;
    },
    cancelChangeUserFields(state) {
      state.isChangeUserFields = false;
      state.userName = state.user.name;
      state.userEmail = state.user.email;
    },
    addUserName(state, action) {
      state.userName = action.payload;
    },
    addUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    addUserPassword(state, action) {
      state.userPassword = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        const accessToken = action.payload.accessToken.split("Bearer ")[1];
        const refreshToken = action.payload.refreshToken;
        if (accessToken && refreshToken) {
          localStorage.setItem(ACCESS_TOKEN, accessToken);
          localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
        state.status = "succes";
        state.userName = "";
        state.userEmail = "";
        state.userPassword = "";
        state.isAuth = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "succes";
      })
      .addCase(authorization.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.user = action.payload.user;
        const accessToken = action.payload.accessToken.split("Bearer ")[1];
        const refreshToken = action.payload.refreshToken;
        if (accessToken && refreshToken) {
          localStorage.setItem(ACCESS_TOKEN, accessToken);
          localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
        state.status = "succes";
        state.userName = "";
        state.userEmail = "";
        state.userPassword = "";
        state.isAuth = true;
      })
      .addCase(authorization.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "succes";
      })
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succes";
        state.user = action.payload.user;
        state.isAuth = true;
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "succes";
        state.isAuth = false;
        // state.error = action.payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succes";
        state.isAuth = false;
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        state.password = "";
        state.email = "";
        state.userName = "";
        state.user = {}
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "succes";
      }),
});

export const { reducer: authReducer, actions: authActions } = authSlice;
