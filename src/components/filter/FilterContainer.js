// External Imports
import { connect } from "react-redux";

// Internal Imports
import { sortByAlphabet } from "../../actions";
import Filter from "./Filter";

const mapDispatchToProps = (dispatch) => ({
  sortByAlphabet: (data) => dispatch(sortByAlphabet(data)),
});

export default connect(null, mapDispatchToProps)(Filter);
