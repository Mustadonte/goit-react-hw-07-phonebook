import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/Contact-list/contact-list-actions';
import { getFilteredContacts } from 'redux/Contacts/Contact-list/contact-list-selectors';
import { Container } from '../Container/Container';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/Filter';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  //   );
  // });
  // const [filter, setFilter] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('filter')) ?? '';
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`Contact of ${data.name} is already exist`);
    }

    dispatch(addContact(data));
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
