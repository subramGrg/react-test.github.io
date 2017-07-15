import React from 'react';
import ToDoEntries from './to_do_entries.jsx';

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] }
    this.add = this.addItem.bind(this);
  }

  addItem(e) {
    var itemList = this.state.list;
    itemList.push({
      key: Date.now(),
      text: this._input.value
    });

    this.setState({
      list: itemList
    })

    this._input.value = '';
    e.preventDefault();
  }

  render() {
    return(
      <div className={}>
        <form onSubmit={this.add}>
          <input placeholder='Enter item' type='text' ref={(el) => {this._input = el;} }/>
          <input type='submit' value='add'/>
        </form>

        <ToDoEntries entries={this.state.list} />
      </div>
    );
  }
}

export default ToDoContainer;
