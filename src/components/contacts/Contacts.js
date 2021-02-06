import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Contacts = (props) => {
  let contactsData = props.state.contacts.contactList;
  return (
    <Fragment>
      <section className="row">
        <div className="col">
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-uppercase">Name</th>
                  <th className="text-uppercase">Actions</th>
                </tr>
              </thead>

              <tbody>
                {contactsData.map((contact) => {
                  const { name } = contact;
                  const { id } = contact;

                  return (
                    <tr key={id}>
                      <td className="align-middle p-4">
                        <Link to={`contacts/${id}`}>{name}</Link>
                      </td>

                      <td className="align-middle p-4">
                        <Link
                          className="btn btn-sm btn-primary mr-2"
                          to={`contacts/${id}`}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contacts;
