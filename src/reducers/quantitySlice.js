import { createSlice } from "@reduxjs/toolkit";

const initialState = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    incrementQty: (state, action) => {
      const { productId } = action.payload;
      state[productId] += 1;
    },

    decrementQty: (state, action) => {
      const { productId } = action.payload;
      if (state[productId] > 1) {
        state[productId]--;
      }
    },
  },
});

export default quantitySlice.reducer;
export const { incrementQty, decrementQty } = quantitySlice.actions;
