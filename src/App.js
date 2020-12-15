import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import Notification from './components/Notification/Notification';
import notificationStyles from './components/Notification/Notification.module.css';
import Loader from './components/Loader/Loader';
import { connect } from 'react-redux';
import { fetchContact } from './redux/operations/operations';
import { getIsExist, getLoading } from './redux/selectors/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContact();
  }
  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        {this.props.isLoading && <Loader />}
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <CSSTransition
          in={this.props.isExists}
          timeout={250}
          classNames={notificationStyles}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isExists: getIsExist(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = {
  onFetchContact: fetchContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
