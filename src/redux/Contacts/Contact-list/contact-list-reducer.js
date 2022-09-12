import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';
const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [removeContact.rejected]: (_, action) => action.payload,
  [removeContact.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
