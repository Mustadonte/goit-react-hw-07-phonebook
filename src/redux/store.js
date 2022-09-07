import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactListReducer } from './Contacts/Contact-list/contact-list-reducer';
import { filterReducer } from './Contacts/Filter/filter-reducer';

const rootReducer = combineReducers({
  items: contactListReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
