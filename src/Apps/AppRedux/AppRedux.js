import React from 'react';
import ContactForm from '../../Components/PhoneBookRedux/ContactForm';
import ContactList from '../../Components/PhoneBookRedux/ContactList';
import Filter from '../../Components/PhoneBookRedux/Filter';
import s from '../App.module.css';

const AppRedux = () => {
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

export default AppRedux;
