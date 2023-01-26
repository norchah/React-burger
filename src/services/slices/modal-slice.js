import { createSlice } from "@reduxjs/toolkit";
import { getNumberOfOrder } from "./api/get-number-order";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIngredient: false,
    modalOrder: false,
    status: null,
    numberOfOrder: null,
    error: '',
  },
  reducers: {
    openModalIngredient(state) {
      state.modalOrder = false;
      state.modalIngredient = true;
    },
    openModalOrder(state) {
      state.modalIngredient = false;
      state.modalOrder = true;
    },
    closeModal(state) {
      state.modalIngredient = false;
      state.modalOrder = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getNumberOfOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getNumberOfOrder.fulfilled, (state, action) => {
        state.status = "succes";
        state.error = null;
        const { number } = action.payload.order;
        state.numberOfOrder = number;
        state.modalOrder = true;
      })
      .addCase(getNumberOfOrder.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
        state.modalOrder = true;
      }),
});

export const { openModalIngredient, openModalOrder, closeModal } = modalSlice.actions;
export const { reducer: modalReducer, actions: modalActions } = modalSlice;
