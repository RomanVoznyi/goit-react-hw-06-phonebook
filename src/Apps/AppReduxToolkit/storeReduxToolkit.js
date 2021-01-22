import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phoneBook from './redux/phone-reducer';

const rootreducer = combineReducers({
  phoneBook,
});

const preloadedState =
  JSON.parse(window.localStorage.getItem('reduxState')) ?? {};

const store = configureStore({
  reducer: rootreducer,
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
