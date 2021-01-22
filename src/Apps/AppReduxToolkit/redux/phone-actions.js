import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phoneBook/add');
const deleteContact = createAction('phoneBook/delete');
const filter = createAction('phoneBook/filter');

const actions = { addContact, deleteContact, filter };

export default actions;
