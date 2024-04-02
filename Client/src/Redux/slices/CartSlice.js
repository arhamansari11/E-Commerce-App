import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const slice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const { index } = action.payload;
      state.items[index].quantity++;
    },
    decreaseQuantity: (state, action) => {
      const { index } = action.payload;
      if (state.items[index].quantity > 1) {
        state.items[index].quantity--;
      }
    },
    removeItem: (state, action) => {
      const { index } = action.payload;
      state.items.splice(index, 1);
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = slice.actions;

export const itemselctor = (state) => state.cart.items;

export default slice.reducer;
