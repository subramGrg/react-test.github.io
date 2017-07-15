import React from 'react';

class ToDoEntries extends React.Component {
  render() {
    var entries = this.props.entries,
        toDoList = entries.map(function(item) {
          return <li key={item.key}>{item.text}</li>
        });

    return(
      <ul>
        {toDoList}
      </ul>
    );
  }
}

export default ToDoEntries;
