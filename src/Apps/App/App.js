import React, { useState, useEffect } from 'react';
import ContactForm from '../../Components/PhoneBook/ContactForm';
import ContactList from '../../Components/PhoneBook/ContactList';
import Filter from '../../Components/PhoneBook/Filter';
import s from '../App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    const { id, name, number } = newContact;

    setContacts(prevState => [...prevState, { id, name, number }]);
  };

  const getVisibleContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const changeInput = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  return (
    <div className={s.myPhonebook}>
      <h2 className={s.bigHeader}>My phonebook</h2>
      <ContactForm onSubmit={handleSubmit} contacts={contacts} />
      <Filter value={filter} onChange={changeInput} />
      <h2 className={s.smallHeader}>My contacts:</h2>
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </div>
  );
};

export default App;
