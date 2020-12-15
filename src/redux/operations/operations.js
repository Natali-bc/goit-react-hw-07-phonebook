import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from '../actions/actions';

const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('http://localhost:2000/contacts', { ...contact })
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};

const fetchContact = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(({ data }) => {
      dispatch(fetchContactSuccess(data));
    })
    .catch(error => dispatch(fetchContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => dispatch(removeContactError(error)));
};

export { addContact, fetchContact, removeContact };
