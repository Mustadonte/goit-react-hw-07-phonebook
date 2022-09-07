import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/Contacts/Filter/filter-actions';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      Поиск контактов
      <input
        type="text"
        value={filter}
        className={css.input}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
