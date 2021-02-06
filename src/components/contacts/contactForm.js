import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editContact } from "../../middleware/";

const ContactForm = ({
  match: {
    params: { id },
  },
  existingContactList,
  editContactDispatch,
}) => {
  const getContactDetails = existingContactList.filter((singleContact) => {
    return singleContact.id === parseInt(id);
  });

  const contactDetails = getContactDetails[0];

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  useEffect(() => {
    if (contactDetails) {
      setName(contactDetails.name);
      setEmail(contactDetails.email);
      setPhone(contactDetails.phone);
    }
  }, [contactDetails]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactData = {
      name: { name },
      email: { email },
      phone: { phone },
    };

    editContactDispatch(id, contactData);
  };

  const nameHandleChange = (e) => {
    setName(e.target.value);
  };

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandleChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  defaultValue={name}
                  onChange={nameHandleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  defaultValue={email}
                  onChange={emailHandleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  defaultValue={phone}
                  onChange={phoneHandleChange}
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
};

const mapStateToProps = (state) => ({
  existingContactList: state.contacts.contactList,
});
const mapDispatchToProps = (dispatch) => ({
  editContactDispatch: (id, edits) => dispatch(editContact(id, edits)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
