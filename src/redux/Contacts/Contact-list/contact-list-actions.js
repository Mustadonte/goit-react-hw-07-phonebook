import { createAction } from '@reduxjs/toolkit';

// ---------- fetchContacts ---------- //

export const fetchContactsRequest = createAction(
  'contacts/items/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/items/fetchContactsSuccess'
);
export const fetchContactsError = createAction(
  'contacts/items/fetchContactsError'
);

// ---------- addContact---------- //

export const addContactRequest = createAction(
  'contacts/items/addContactRequest'
);
export const addContactSuccess = createAction(
  'contacts/items/addContactSuccess'
);
export const addContactError = createAction(
  'contacts/items/fetchContactsError'
);

// ---------- removeContact ---------- //

export const removeContactRequest = createAction(
  'contacts/items/removeContactRequest'
);
export const removeContactSuccess = createAction(
  'contacts/items/removeContactSuccess'
);
export const removeContactError = createAction(
  'contacts/items/fetchContactsError'
);
