import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { ContactsList } from '../components/contacts/ContacstList';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactsForm from '../components/phonebook/ContactsForm';
import { ContactsFilter } from '../components/filter/ContactsFilter';
import styled from 'styled-components';

const StyledSection = styled.section`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <StyledSection>
      <div>
        {/* <h1>Your Phonebook</h1> */}
        <ContactsForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <ContactsFilter />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <ContactsList />
      </div>
    </StyledSection>
  );
};
export default Contacts;
