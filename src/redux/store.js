import { configureStore } from "@reduxjs/toolkit";
import contactsReducers from "./contacts/contactsReducers";

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});
export default store;
