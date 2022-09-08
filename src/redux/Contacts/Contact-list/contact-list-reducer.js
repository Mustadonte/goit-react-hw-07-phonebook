import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contact-list-actions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [contactsActions.removeContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
  [contactsActions.addContactError]: (_, action) => action.payload,
  [contactsActions.addContactRequest]: () => null,
  [contactsActions.removeContactError]: (_, action) => action.payload,
  [contactsActions.removeContactRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
