import { createSlice } from '@reduxjs/toolkit';

export const  ingredientDetailsSlice = createSlice({
    name: 'ingredientDetails',
    initialState: {
        ingredientDetails: [],
    },
    reducers: {
        addIngredientDetails(state, action) {
            state.ingredientDetails = action.payload;
        },
        deleteIngredientDetails(state) {
            state.ingredientDetails = []
        }
    }
}) 

export const { addIngredientDetails, deleteIngredientDetails } = ingredientDetailsSlice.actions;
export const {reducer: ingredientDetailsReducer, actions: ingredientDetailsActions} = ingredientDetailsSlice;
