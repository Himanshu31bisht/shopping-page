
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Action to add an item to the cart
    add: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If item already exists in the cart, just increase its quantity
        state[itemIndex].quantity += 1;
      } else {
        // If it's a new item, add it to the cart with quantity 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    // Action to remove an item from the cart
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    // Action to increase the quantity of an item
    increaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    // Action to decrease the quantity of an item
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
