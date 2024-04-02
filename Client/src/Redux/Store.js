import { configureStore } from "@reduxjs/toolkit"
import cartreducer from "./slices/CartSlice"
export const store = configureStore({
    reducer : {
        cart  : cartreducer,
    }
});

