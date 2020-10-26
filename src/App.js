import React, { Component } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import contactsOperations from "./redux/contacts/contactsOperations";
import contactsSelectors from "./redux/contacts/contactsSelectors";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: blue;
    `;
    return (
      <Layout>
        <AppHeader />

        <ContactForm />
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames="filterIn"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.props.isLoadingContacts}
        />
        <ContactList />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
