import PropTypes from 'prop-types';
import { Contacts } from 'components/ContactList/ContactsListItem.styled';

export default function ContactsListItem({ name, number, children }) {
  return (
    <Contacts>
      <p>
        {name}: {number}
      </p>
      {children}
    </Contacts>
  );
}

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
