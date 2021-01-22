import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.NavBar}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Vanila PhoneBook
      </NavLink>
      <NavLink to="/redux" className={s.link} activeClassName={s.activeLink}>
        Redux PhoneBook
      </NavLink>
      <NavLink
        to="/redux-toolkit"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Redux Toolkit PhoneBook
      </NavLink>
    </div>
  );
};

export default Navigation;
