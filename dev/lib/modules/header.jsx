import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/project'>Projects</NavLink>
      </nav>
    );
  }
}

export default Header;
