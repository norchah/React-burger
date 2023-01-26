import { createSlice } from "@reduxjs/toolkit";

export const burgerConstructorSlice = createSlice({
  name: "constructor",
  initialState: {
    bun: [],
    burgerConstructor: [],
    orderList: [],
    totalPrice: null,
  },
  reducers: {
    addBun(state, action) {
      state.bun = action.payload;
    },
    addIngredient(state, action) {
      state.burgerConstructor = state.burgerConstructor.concat(action.payload);
    },
    delIngredient(state, action) {
      const index = state.burgerConstructor.findIndex((item) => item._id === action.payload);
      state.burgerConstructor.splice(index, 1);
    },
    moveIngredient(state, action) {
      const arr = state.burgerConstructor;
      const dragElement = arr[action.payload.drag];
      const hoverElement = arr[action.payload.hover];
      arr.splice(action.payload.hover, 1, dragElement);
      arr.splice(action.payload.drag, 1, hoverElement);
    },
    addTotal(state, action) {
      state.orderList = action.payload.orderList;
      state.totalPrice = action.payload.totalPrice;
    }
  },
});

export const { reducer: burgerConstructorReducer, actions: burgerConstructorActions } =
burgerConstructorSlice;
