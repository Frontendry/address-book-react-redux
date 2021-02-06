// External Imports
import { connect } from "react-redux";

// Internal Imports
import Contacts from "./Contacts";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Contacts);
