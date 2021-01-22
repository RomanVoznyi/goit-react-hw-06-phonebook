import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../../Apps/AppRedux/redux/phone-actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.contacsList}>
    {contacts.map(({ id, contactName, contactNumber }) => (
      <li key={id} className={s.item}>
        <span className={s.name}>{contactName}</span>: {contactNumber}
        <button
          type="button"
          className={s.close}
          onClick={() => onDelete(id)}
        ></button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const getVisibleContacts = (arr, filter) => {
    return arr.filter(el =>
      el.contactName.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return {
    contacts: getVisibleContacts(
      state.phoneBook.contacts,
      state.phoneBook.filter,
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: value => dispatch(actions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
