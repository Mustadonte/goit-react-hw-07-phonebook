import { getFilteredContacts } from 'redux/Contacts/Contact-list/';
import * as contactsOperations from '../../redux/Contacts/Contact-list/contacts-operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          name={name}
          number={number}
          onDeleteBtn={() => dispatch(contactsOperations.removeContact(id))}
        />
      ))}
    </ul>
  );
};
