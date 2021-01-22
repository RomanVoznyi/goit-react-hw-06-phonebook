import { combineReducers } from 'redux';
import actionTypes from './phone-types';

const initialState =
  JSON.parse(window.localStorage.getItem('reduxState'))?.phoneBook?.contacts ??
  [];

const contactsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload.contactName;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});
