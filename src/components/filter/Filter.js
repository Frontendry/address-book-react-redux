import React from "react";

const Filter = ({ sortByAlphabet }) => {
  const sortByInput = (e) => {
    let value = e.target.value;
    let order = value.endsWith("asc") ? "asc" : "desc";

    sortByAlphabet({ order });
  };
  return (
    <div className="form-row">
      <div className="col">
        <select
          className="custom-select"
          onChange={(e) => {
            sortByInput(e);
          }}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Sort by First Name
          </option>

          <option value="alphabet_asc">A-Z</option>
          <option value="alphabet_desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
