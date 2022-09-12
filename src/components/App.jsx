import { fetchContacts } from 'redux/Contacts/Contact-list/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(store => store.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Search contact</h2>
      <Filter />
      <ContactList />
      {pending && <Loader />}
      <ToastContainer />
    </Container>
  );
};
