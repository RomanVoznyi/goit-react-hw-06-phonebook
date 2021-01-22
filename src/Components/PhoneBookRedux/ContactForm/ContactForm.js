import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import actions from '../../../Apps/AppRedux/redux/phone-actions';
import s from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (checkContacts(contacts, contactName)) {
      toast.error(`${contactName} is already in contacts.`);
    } else {
      onSubmit({
        id: uuidv4(),
        contactName,
        contactNumber,
      });

      reset();
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(
      ({ contactName }) => contactName.toLowerCase() === target.toLowerCase(),
    );
  };

  const changeInput = ({ target: { name, value } }) =>
    name === 'name' ? setContactName(value) : setContactNumber(value);

  const reset = () => {
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={s.newContacsForm} onSubmit={handleSubmit}>
      <h2 className={s.title}>Add new contacts:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>Name:</span>
        <input
          type="text"
          onChange={changeInput}
          value={contactName}
          name="name"
          placeholder="input name"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.labelTitle}>Phone:</span>
        <input
          type="text"
          onChange={changeInput}
          value={contactNumber}
          name="number"
          placeholder="input phone number"
          required
        />
      </label>

      <button type="submit" className={s.button}>
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(actions.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
