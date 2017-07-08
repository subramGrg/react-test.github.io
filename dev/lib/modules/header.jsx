import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../stylesheets/Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <nav className={style.nav}>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink className={style.logo} to='/'>SG</NavLink>
          <NavLink to='/project'>Projects</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
