import { combineReducers } from "redux";
import contactsActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [contactsActions.addContact]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [contactsActions.removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.onChangeFilter]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
