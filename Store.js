// Importing the `configureStore` function from Redux Toolkit to create the Redux store.
// `configureStore` simplifies store creation by automatically adding useful middleware and Redux DevTools integration.
import { configureStore } from "@reduxjs/toolkit";

// Importing the CartSlice reducer which was defined in the CartSlice file.
import { CartSlice } from "./Slices/CartSlice";

// Creating the Redux store by configuring it with the reducer(s).
export const store = configureStore({
    // The `reducer` key specifies which slice(s) of state the store will manage.
    // In this case, we are adding a `cart` slice to the store.
    reducer: {
        // The `cart` slice is connected to the store by using `CartSlice.reducer`.
        // This will allow the Redux store to manage cart-related state.
        cart: CartSlice.reducer,
    }
});
