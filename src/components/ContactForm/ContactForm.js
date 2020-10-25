import React, { Component } from "react";
import "./ContactForm.css";
import InputForm from "../InputForm/InputForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  notify = () =>
    toast.error(" This contact already exist!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      return;
    }
    const contactName = this.props.contacts.map((el) => {
      return el.name;
    });
    const validation = contactName.find((el) => el === name);

    validation === name ? this.notify() : this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  handleInput = (value) => {
    this.setState({ name: value });
  };
  handleNumber = (value) => {
    this.setState({ number: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <ToastContainer />
        <InputForm
          label="Name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onInput={this.handleInput}
        />
        <InputForm
          label="Number"
          type="tel"
          value={number}
          placeholder="Enter your number"
          onInput={this.handleNumber}
        />
        <button type="submit" className="buttonSubmit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};
const mapDispatchToProps = { onAddContact: contactsActions.addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
