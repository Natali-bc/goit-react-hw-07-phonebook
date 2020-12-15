import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('ADD_CONTACT_REQUEST');
const addContactSuccess = createAction('ADD_CONTACT_SUCCESS');
const addContactError = createAction('ADD_CONTACT_ERROR');

const fetchContactRequest = createAction('FETCH_CONTACT_REQUEST');
const fetchContactSuccess = createAction('FETCH_CONTACT_SUCCESS');
const fetchContactError = createAction('FETCH_CONTACT_ERROR');

const removeContactRequest = createAction('REMOVE_CONTACT_REQUEST');
const removeContactSuccess = createAction('REMOVE_CONTACT_SUCCESS');
const removeContactError = createAction('REMOVE_CONTACT_ERROR');

const changeFilter = createAction('CHANGE_FILTER');
const notification = createAction('NOTIFICATION');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
  notification,
};
