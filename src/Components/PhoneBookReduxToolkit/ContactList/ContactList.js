import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../Apps/AppReduxToolkit/redux/phone-actions';
import { getVisibleContacts } from '../../../Apps/AppReduxToolkit/redux/phone-selector';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => getVisibleContacts(state));
  const dispatch = useDispatch();

  return (
    <ul className={s.contacsList}>
      {contacts.map(({ id, contactName, contactNumber }) => (
        <li key={id} className={s.item}>
          <span className={s.name}>{contactName}</span>: {contactNumber}
          <button
            type="button"
            className={s.close}
            onClick={() => dispatch(actions.deleteContact(id))}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
