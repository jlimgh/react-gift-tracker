import { configureStore } from "@reduxjs/toolkit";
import { giftsReducer, addGift, removeGift, changeSearchTerm } from "./slices/giftsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        gifts: giftsReducer,
        form: formReducer
    }
})

export {
    store,
    changeName,
    changeCost,
    addGift,
    removeGift,
    changeSearchTerm
}