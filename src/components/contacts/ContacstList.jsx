import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from 'redux/contacts/selectors';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 0;
  & li {
    font-weight: 700;
    font-size: large;
    background-color: #3973a796;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }
`;

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <StyledList>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </StyledList>
  );
};
