import axios from "axios";
import contactsActions from "./contactsActions";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((response) =>
      dispatch(contactsActions.addContactSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then((response) =>
      dispatch(contactsActions.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

const contactsOperations = {
  addContact,
  fetchContacts,
  removeContact,
};

export default contactsOperations;
