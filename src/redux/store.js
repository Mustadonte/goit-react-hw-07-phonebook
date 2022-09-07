import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactListReducer } from './Contacts/Contact-list/';
import { filterReducer } from './Contacts/Filter/';

const rootReducer = combineReducers({
  items: contactListReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
