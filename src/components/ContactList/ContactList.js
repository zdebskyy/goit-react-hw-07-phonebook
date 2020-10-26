import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.css";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className="contactsList">
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames="contactIn">
          <li className="contactItem">
            <span className="contactText">
              {contact.name} : {contact.number}
            </span>
            <button
              type="button"
              className="removeBtn"
              onClick={() => onRemoveContact(contact.id)}
            >
              X
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.filteredContacts(state),
});

const mapDispatchToProps = {
  onRemoveContact: contactsOperations.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
