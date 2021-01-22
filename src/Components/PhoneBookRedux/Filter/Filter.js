import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../../Apps/AppRedux/redux/phone-actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.findForm}>
      <h2 className={s.title}>Find contacts:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>find:</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="input name"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(actions.filter(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
