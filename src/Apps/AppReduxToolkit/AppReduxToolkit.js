import React from 'react';
import ContactForm from '../../Components/PhoneBookReduxToolkit/ContactForm';
import ContactList from '../../Components/PhoneBookReduxToolkit/ContactList';
import Filter from '../../Components/PhoneBookReduxToolkit/Filter';
import s from '../App.module.css';

const AppReduxToolkit = () => {
  return (
    <div className={s.myPhonebook}>
      <h2 className={s.bigHeader}>My phonebook</h2>
      <ContactForm />
      <Filter />
      <h2 className={s.smallHeader}>My contacts:</h2>
      <ContactList />
    </div>
  );
};

export default AppReduxToolkit;
