import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import s from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (checkContacts(contacts, name)) {
      toast.error(`${name} is already in contacts.`);
    } else {
      onSubmit({
        id: uuidv4(),
        name,
        number,
      });

      reset();
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(({ name }) => name.toLowerCase() === target.toLowerCase());
  };

  const changeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.newContacsForm} onSubmit={handleSubmit}>
      <h2 className={s.title}>Add new contacts:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>Name:</span>
        <input
          type="text"
          onChange={changeInput}
          value={name}
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
          value={number}
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

export default ContactForm;
