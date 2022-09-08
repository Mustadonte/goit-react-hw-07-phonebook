import * as contactsActions from './contact-list-actions';
import * as contactsApi from './contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest);
  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

export const addContact = data => async dispatch => {
  dispatch(contactsActions.addContactRequest);
  try {
    const contact = await contactsApi.addContact(data);
    dispatch(contactsActions.addContactSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

export const removeContact = id => async dispatch => {
  dispatch(contactsActions.removeContactRequest);
  try {
    const result = await contactsApi.removeContact(id);
    dispatch(contactsActions.removeContactSuccess(id));
    return result;
  } catch (error) {
    console.log(error.msg);
  }
};
