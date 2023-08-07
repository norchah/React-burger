import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../api/reset-password";
import { sendEmail } from "../api/send-email";

export const passwordSlice = createSlice({
  name: "password",
  initialState: {
    status: null,
    email: "",
    password: "",
    token: "",
    error: "",
    isSentEmail: false,
  },
  reducers: {
    addEmail(state, action) {
      state.email = action.payload;
    },
    addNewPassword(state, action) {
      state.password = action.payload;
    },
    addToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.status = "loading";
        state.isSentEmail = false;
      })
      .addCase(sendEmail.fulfilled, (state) => {
        state.status = "succes";
        state.isSentEmail = true;
        state.email = "";
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.status = "succes";
        state.error = action.payload.error;
        state.isSentEmail = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPassword.fulfilled, state => {
        state.status = "succes";
        state.isSentEmail = false;
        state.email = "";
        state.token = "";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "succes";
        state.isSentEmail = false;
        state.error = action.payload.error;
      })
  },
});

export const { reducer: passwordReducer, actions: passwordActions } = passwordSlice;
