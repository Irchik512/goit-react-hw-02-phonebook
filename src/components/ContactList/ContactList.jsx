import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactList/ContactsListItem';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { ContactsList } from 'components/ContactList/ContactsList.styled';

export default function ContactList({ contacts, onClick }) {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} name={name} number={number}>
          <Button type="button" onClick={() => onClick(id)}>
            Delete
          </Button>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.string,
};
