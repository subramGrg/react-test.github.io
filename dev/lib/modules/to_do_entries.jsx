import React from 'react';

class ToDoEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var entries = this.props.entries,
        toDoList = entries.map(function(item) {
          return(
            <li key={item.key}>
              {item.text}
              <span></span>
            </li>
          );
        }, this);

    return(
      <ul>
        {toDoList}
      </ul>
    );
  }
}

export default ToDoEntries;
