import { createReducer } from '@reduxjs/toolkit';
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
  changeFilter,
  notification,
} from '../actions/actions';

const initialState = {
  contacts: [],
  filter: '',
  isExists: false,
  isLoading: false,
};

const onAddContact = (state, action) => [...state, { ...action.payload }];
const onRemoveContact = (state, action) =>
  state.filter(item => item.id !== action.payload);

const contactsReducer = createReducer(initialState.contacts, {
  [fetchContactSuccess]: (state, action) => action.payload,
  [addContactSuccess]: onAddContact,
  [removeContactSuccess]: onRemoveContact,
});
const filterReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});
const notificationReducer = createReducer(initialState.isExists, {
  [notification]: (state, action) => action.payload,
});
const loadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

export { contactsReducer, filterReducer, notificationReducer, loadingReducer };
