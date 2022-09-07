import { getFilteredContacts } from 'redux/Contacts/Contact-list/contact-list-selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/Contacts/Contact-list/contact-list-actions';
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
          onDeleteBtn={() => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};
