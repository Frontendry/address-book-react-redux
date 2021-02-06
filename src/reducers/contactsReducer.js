import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  UPDATED_CONTACT_SUCCESS,
  SORT_BY_ALPHABET,
} from "../constants";

const initialState = {
  contactList: [],
  contact: {},
  loading: false,
  hasErrors: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        loading: true,
      };
    /* return Object.assign({}, state, {
        loading: true,
      }); */

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contactList: action.payload,
        loading: true,
        hasErrors: false,
      };
    /*  return Object.assign({}, state, {
        contactList: action.payload,
        loading: true,
        hasErrors: false,
      });
 */
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    /*  return Object.assign({}, state, {
        loading: false,
        hasErrors: true,
      }); */

    case GET_CONTACT:
      return {
        ...state,
        loading: true,
      };
    /*  return Object.assign({}, state, {
        loading: true,
      }); */

    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: true,
        hasErrors: false,
      };
    /*  return Object.assign({}, state, {
        contact: action.payload,
        loading: true,
        hasErrors: false,
      }); */

    case GET_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    /*  return Object.assign({}, state, {
        loading: false,
        hasErrors: true,
      }); */

    case UPDATED_CONTACT_SUCCESS:
      // Make sure to update the changed field

      return {
        ...state,
        loading: false,
        hasErrors: false,
      };

    /*  return Object.assign({}, state, {
        loading: false,
        hasErrors: false,
      }); */

    case SORT_BY_ALPHABET:
      const { order } = action.payload;

      const sortByAlphabetState = Object.assign({}, state);

      let sortedAlphabetArr;

      if (order === "asc") {
        sortedAlphabetArr = state.contactList.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        sortedAlphabetArr = state.contactList.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      sortByAlphabetState.contactList = sortedAlphabetArr;

      return sortByAlphabetState;

    default:
      return state;
  }
};

export default contactsReducer;
