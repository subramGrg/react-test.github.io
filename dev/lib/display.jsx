import React from 'react';

import DisplayCounter from './display_counter.jsx';
import style from './stylesheets/Display.scss';

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrease() {
    var counter = this.state.counter;

    if (counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return(
      <div className={style.container} >
        <DisplayCounter count={this.state.counter} />

        <div className={style['button-container']}>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    );
  }
}

export default Display;
