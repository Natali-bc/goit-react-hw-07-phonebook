import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';
import { removeContact } from '../../redux/operations/operations';
import styles from '../ContactList/ContactList.module.css';
import { getVisibleContacts } from '../../redux/selectors/contacts-selectors';

const ContactList = ({ visibleContacts, handleDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {visibleContacts.map((contact, idx) => {
        return (
          <CSSTransition key={idx} timeout={250} classNames={styles}>
            <ContactListItem
              key={idx}
              contact={contact}
              handleDelete={() => handleDelete(contact.id)}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visibleContacts: getVisibleContacts(state),
});

const mapDispatchToProps = {
  handleDelete: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
