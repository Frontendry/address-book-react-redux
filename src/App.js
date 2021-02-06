// External imports
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

// Internal imports
import { fetchContacts } from "./middleware";
import ContactsContainer from "./components/contacts/ContactsContainer";
import singleContact from "./components/contacts/singleContact";
import contactForm from "./components/contacts/contactForm";
import FilterContainer from "./components/filter/FilterContainer";

// Assets
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      /* <Fragment>
        <div className="container">
          <FilterContainer />
          <ContactsContainer />
        </div>
      </Fragment> */

      <Router>
        <div className="container">
          <FilterContainer />
          <Switch>
            <Route exact path="/" component={ContactsContainer} />
            <Route exact path="/contacts" component={ContactsContainer} />
            <Route exact path="/contacts/:id" component={singleContact} />
            <Route exact path="/add-edit-contact/:id" component={contactForm} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
