import React from 'react';
import { NavLink } from 'react-router-dom';

import Style from '../stylesheets/Project.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <h1>Recent Projects</h1>
        <p className={Style.intro}>The following is a list of React projects i have developed on my spare time.<br/><br/> Click any of the links below to see them in action.</p>

        <ul className={Style['project-list']}>
          <li><NavLink className={Style['list-item']} to='/to-do'>Add a blog</NavLink></li>
          <li><NavLink className={Style['list-item']} to='/to-do'>Todo list</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Projects;
