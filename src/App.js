import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

const App = ({ contacts }) => {
  return (
    <Layout>
      <AppHeader />
      <ContactForm />
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames="filterIn"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
