import React from "react";
import { CSSTransition } from "react-transition-group";
import "./AppHeader.css";
const AppHeader = () => {
  return (
    <header>
      <CSSTransition in={true} appear={true} timeout={500} classNames="logoIn">
        <h2 className="logo">PhoneBook</h2>
      </CSSTransition>
    </header>
  );
};

export default AppHeader;
