import React, { Component } from "react";
import { connect } from "react-redux";

export class contactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getContactDetails = () => {
    const {
      match: {
        params: { id },
      },
      existingContactList,
    } = this.props;

    const loadedContact = existingContactList.filter((singleContact) => {
      return singleContact.id === parseInt(id);
    });

    return loadedContact[0];
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    let contactData = this.getContactDetails();
    console.log(contactData);

    let name = contactData && contactData.name;
    let email = contactData && contactData.name;
    let phone = contactData && contactData.name;

    if (id === "_add") {
      return;
    } else {
      this.setState({
        name: name,
        email: email,
        phone: phone,
      });
    }
  }

  /* componentDidMount() {
    const getContactData = (id, list) => {
      const loadedContact = list.filter((singleContact) => {
        return singleContact.id === parseInt(id);
      });

      return loadedContact[0];
    };

    const setNewStateValues = () => {
      const {
        match: {
          params: { id },
        },
        contacts: { contactList },
      } = this.props;

      let contactData = getContactData(id, contactList);

      console.log(contactData);

      if (contactData !== undefined) {
        this.setState({
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
        });
      }
    };

    setNewStateValues();

    console.log(this.state);
  } */

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const contactDetails = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    console.log(contactDetails);

    if (id !== "_add") {
    }

    /*  if (params.id) {
      dispatch(vendorAction.editVendorInfo(params.id, payload));
    } else {
      dispatch(vendorAction.createVendor(payload));
    } */
  }

  render() {
    //this.setNewStateValues();

    /*   const getContactData = (id, list) => {
      const loadedContact = list.filter((singleContact) => {
        return singleContact.id === parseInt(id);
      });

      return loadedContact[0];
    };

    let contactData = getContactData(id, contactList); */

    /*  if (contactData !== undefined) {
      this.setState({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
      });
    } */

    const { name, email, phone } = this.state;

    return (
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    /*  defaultValue={name} */
                    /* defaultValue={
                      id === "_add"
                        ? ""
                        : contactData !== undefined
                        ? this.state.name
                        : ""
                    } */
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    /* defaultValue={email} */
                    /* defaultValue={
                      id === "_add"
                        ? ""
                        : contactData !== undefined
                        ? this.state.email
                        : ""
                    } */
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    /*  defaultValue={phone} */
                    /* defaultValue={
                      id === "_add"
                        ? ""
                        : contactData !== undefined
                        ? this.state.phone
                        : ""
                    } */
                    onChange={this.handleChange}
                  />
                </div>

                <div className="d-flex align-items-center mt-4">
                  <button type="submit" className="btn btn-primary mr-3">
                    Save
                  </button>
                  <button className="btn btn-danger">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  existingContactList: state.contacts.contactList,
});
const mapDispatchToProps = (dispatch) => ({
  //editContact: (id, edits) => dispatch(editContact(id, edits)),
});

export default connect(mapStateToProps, mapDispatchToProps)(contactForm);
