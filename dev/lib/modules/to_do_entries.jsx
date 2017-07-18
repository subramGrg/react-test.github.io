import React from 'react';
import ToDo from './to_do_entry.jsx';

const ToDoEntries = ({entries, removeCallback}) => {
  return(
    <ul>
      {
        entries.map((item, index) => {
          return(<ToDo index={item.key} key={item.key} value={item.text} removeItem={removeCallback}/>);
        })
      }
    </ul>
  );
}

export default ToDoEntries;
