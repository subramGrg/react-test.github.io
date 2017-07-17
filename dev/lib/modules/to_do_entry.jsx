import React from 'react';

class ToDoEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { value, removeItem } = this.props;
    return (
      <li onClick={removeItem}>{value}</li>
    );
  }
}

export default ToDoEntry;
