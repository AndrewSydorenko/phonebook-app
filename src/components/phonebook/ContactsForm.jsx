import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/contactsOperations';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  gap: 5px;
  font-weight: 700;
`;

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contacts.find(contact => contact.name === name)) {
      alert('вже Є!');
    } else {
      dispatch(addContact({ name, number }));
    }
    event.target.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Example"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="">Number</label>
      <input
        type="tel"
        name="number"
        placeholder="+38 065 335 22 34"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </StyledForm>
  );
};

export default ContactsForm;
