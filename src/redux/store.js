import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/Contact-list/contact-list-reducer';
import { filterReducer } from './Contacts/Filter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
