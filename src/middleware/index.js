// Internal Imports
import { REST_API_URL } from "../constants/index";
import {
  getContacts,
  getContactsSuccess,
  getContactsFailure,
  getContact,
  getContactSuccess,
  getContactFailure,
  updatedContactSuccess,
} from "../actions";

export const fetchContacts = () => {
  return async (dispatch) => {
    dispatch(getContacts());

    try {
      const response = await fetch(REST_API_URL);
      const data = await response.json();

      dispatch(getContactsSuccess(data));
    } catch (error) {
      dispatch(getContactsFailure());
    }
  };
};

export const fetchContact = (id) => {
  return async (dispatch) => {
    dispatch(getContact());

    try {
      const response = await fetch(`${REST_API_URL}/${id}`);
      const data = await response.json();

      dispatch(getContactSuccess(data));
    } catch (error) {
      dispatch(getContactFailure());
    }
  };
};

export const editContact = (id, edits) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REST_API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(edits),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      dispatch(updatedContactSuccess(data));
      console.log(data);
    } catch (error) {}
  };
};
