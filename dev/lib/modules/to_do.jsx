import React from 'react';
import Style from '../stylesheets/Todo.scss';

import ToDoContainer from './to_do_container.jsx';

class ToDo extends React.Component {
  render() {
    return(
      <div className={Style.container}>
        <h1 className={Style.heading}>Todo list</h1>

        <ToDoContainer />
      </div>
    );
  }
}

export default ToDo;
