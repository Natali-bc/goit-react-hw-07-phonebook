import { configureStore } from '@reduxjs/toolkit';
import {
  contactsReducer,
  filterReducer,
  notificationReducer,
  loadingReducer,
} from './reducers/reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isExists: notificationReducer,
    isLoading: loadingReducer,
  },
});

export default store;
