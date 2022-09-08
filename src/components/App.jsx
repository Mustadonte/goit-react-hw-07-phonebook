import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/Contacts/Contact-list/';
import { Container } from '../Container/Container';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import * as contactsOperations from '../redux/Contacts/Contact-list/contacts-operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`Contact of ${data.name} is already exist`);
    }

    dispatch(contactsOperations.addContact(data));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Search contact</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
