// External Import
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Internal Import
import { fetchContact } from "../../middleware";

class singleContact extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;

    this.props.fetchContact(id);
  }

  render() {
    let { name, email, phone } = this.props.contact;

    return (
      <Fragment>
        <div className="row">
          <div className="col-5 mx-auto">
            <div className="card border-0 shadow-sm">
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <div className="media align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center border border-gray rounded-circle mr-3 "
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className="bi bi-person d-flex"></i>
                    </span>

                    <div className="media-body">{name}</div>
                  </div>
                </li>

                <li className="list-group-item ">
                  <div className="media align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center border border-gray rounded-circle mr-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className="bi bi-envelope d-flex"></i>
                    </span>

                    <div className="media-body">{email}</div>
                  </div>
                </li>

                <li className="list-group-item ">
                  <div className="media align-items-center">
                    <span
                      className="d-flex align-items-center justify-content-center border border-gray rounded-circle mr-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className="bi bi-phone d-flex"></i>
                    </span>

                    <div className="media-body">{phone}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-5 mx-auto">
            <Link to="/contacts" className="btn btn-primary">
              Back to contacts
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contacts.contact,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchContact: () => dispatch(fetchContact(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(singleContact);
