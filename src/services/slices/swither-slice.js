import { createSlice } from "@reduxjs/toolkit";

export const switherSLice = createSlice({
  name: "switcher",
  initialState: {
    currentTab: "bun",
  },
  reducers: {
    switchCurrentTab(state, action) {
      state.currentTab = action.payload;
    },
  },
});

export const { reducer: switcherReducer, actions: switcherActions } =
  switherSLice;
