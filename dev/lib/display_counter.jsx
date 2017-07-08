import React from 'react';
import style from './stylesheets/DisplayCounter.scss'

class DisplayCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.counter}>
        Hits<br/>
        {this.props.count}
      </div>
    );
  }
}

export default DisplayCounter;
