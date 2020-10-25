import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));

const removeContact = createAction("contact/remove");

const onChangeFilter = createAction("contact/filter");

const contactsActions = {
  addContact,
  removeContact,
  onChangeFilter,
};

export default contactsActions;
