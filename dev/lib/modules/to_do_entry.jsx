import React from 'react';

class ToDoEntry extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    const { index, removeItem } = this.props;

    removeItem(index);
  }

  render() {
    var { value, removeItem } = this.props;
    return (
      <li onClick={this.remove}>{value}</li>
    );
  }
}

export default ToDoEntry;
