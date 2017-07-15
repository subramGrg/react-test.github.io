import React from 'react';
import ToDoEntries from './to_do_entries.jsx';

import Style from '../stylesheets/TodoContainer.scss'

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] }
    this.add = this.addItem.bind(this);
  }

  addItem(e) {
    let itemList = this.state.list;
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

  removeItem(id) {
    let itemList = this.state.list;

    itemList.filter(function(item) {
      if(item.key != id)
        return item
    });

    this.setState({
      list: itemList
    });
  }

  render() {
    return(
      <div className={Style['to-do-container']}>
        <div className={Style['form-container']}>
          <form onSubmit={this.add}>
            <input placeholder='Enter item' type='text' ref={(el) => {this._input = el;} }/>
            <button>Add</button>
          </form>

          <ToDoEntries entries={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default ToDoContainer;
