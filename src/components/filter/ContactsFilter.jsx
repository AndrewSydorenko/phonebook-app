import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterUpdate = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <input value={filter} type="text" onChange={handleFilterUpdate} />
    </div>
  );
};
