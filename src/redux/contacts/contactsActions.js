import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/request");
const addContactSuccess = createAction("contact/success");
const addContactError = createAction("contact/error");

const fetchContactsRequest = createAction("contact/fetchRequest");
const fetchContactsSuccess = createAction("contact/fetchSuccess");
const fetchContactsError = createAction("contact/fetchError");

const removeContactRequest = createAction("contact/removeRequest");
const removeContactSuccess = createAction("contact/removeSuccess");
const removeContactError = createAction("contact/removeError");

const onChangeFilter = createAction("contact/filter");

const contactsActions = {
  onChangeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};

export default contactsActions;
