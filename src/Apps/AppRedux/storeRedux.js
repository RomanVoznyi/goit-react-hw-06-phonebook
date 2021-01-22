import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBook from './redux/phone-reducer';

const rootreducer = combineReducers({
  phoneBook,
});

const persistedState =
  JSON.parse(window.localStorage.getItem('reduxState')) ?? {};

const store = createStore(rootreducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
