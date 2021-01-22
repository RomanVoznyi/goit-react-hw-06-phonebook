import actionTypes from './phone-types';

const addContact = ({ id, contactName, contactNumber }) => {
  return {
    type: actionTypes.ADD,
    payload: {
      id,
      contactName,
      contactNumber,
    },
  };
};

const deleteContact = id => {
  return {
    type: actionTypes.DELETE,
    payload: {
      id,
    },
  };
};

const filter = contactName => {
  return {
    type: actionTypes.FILTER,
    payload: {
      contactName,
    },
  };
};

const actions = { filter, addContact, deleteContact };

export default actions;
