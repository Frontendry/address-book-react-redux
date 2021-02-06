// External Imports
import { combineReducers } from "redux";

// Internal Imports
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
