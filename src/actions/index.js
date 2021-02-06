import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  UPDATED_CONTACT_SUCCESS,
  UPDATED_CONTACT_FAILURE,
  SORT_BY_ALPHABET,
} from "../constants/index";

// Create Redux action creators that return an action
export const getContacts = () => ({
  type: GET_CONTACTS,
});

export const getContactsSuccess = (contacts) => ({
  type: GET_CONTACTS_SUCCESS,
  payload: contacts,
});

export const getContactsFailure = () => ({
  type: GET_CONTACTS_FAILURE,
});

export const getContact = () => ({
  type: GET_CONTACT,
});

export const getContactSuccess = (contact) => ({
  type: GET_CONTACT_SUCCESS,
  payload: contact,
});

export const getContactFailure = () => ({
  type: GET_CONTACT_FAILURE,
});

export const updatedContactSuccess = (updatedContact) => ({
  type: UPDATED_CONTACT_SUCCESS,
  payload: updatedContact,
});

export const updatedContactFailure = (updatedContact) => ({
  type: UPDATED_CONTACT_FAILURE,
});

export const sortByAlphabet = (data) => ({
  type: SORT_BY_ALPHABET,
  payload: data,
});
