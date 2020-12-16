import React, { Component } from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/operations/operations';
import { notification } from '../../redux/actions/actions';
import { getContact } from '../../redux/selectors/contacts-selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = { name: this.state.name, number: this.state.number };
    const { contacts, notification, addContact } = this.props;

    if (contacts.find(contact => contact.name === this.state.name)) {
      notification(true);
      setTimeout(() => {
        notification(false);
      }, 2000);
      this.setState({ name: '', number: '' });
    } else {
      addContact(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className={styles.inputTitle}>Name</span>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
              required
            />
          </label>
          <label>
            <span className={styles.inputTitle}>Number</span>
            <input
              name="number"
              value={number}
              onChange={this.handleChange}
              className={styles.input}
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContact(state),
});

const mapDispatchToProps = {
  addContact,
  notification,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
