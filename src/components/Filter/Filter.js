import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

import "./Filter.css";
const Filter = ({ value, onFilter }) => {
  return (
    <div className="filterContainer">
      <p className="filterTitle">Find contact by name</p>
      <label>
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
          className="filterInput"
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = { onFilter: contactsActions.onChangeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
