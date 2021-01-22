import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phone-actions';

const contactsReduser = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) => {
    return state.filter(el => el.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [actions.filter]: (_, action) => {
    return action.payload;
  },
});

export default combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});
