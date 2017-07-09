import React from 'react';

import img from '../assets/ruby.png';
import style from '../stylesheets/Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={style.article}>
        <article>
          <a href='https://github.com/subramGrg/robot-simulator' target='_blank'>
            <img src={img} alt='ruby-logo'/>
          </a>
          <h2 className={style.title}>Robot Simulator</h2>
          <span className={style.tag}>Ruby, RSpec</span>

          <p>A fun little Ruby application i developed that simulates a robot moving on a 5x5 unit table by giving commands. This is a non GUI based program.</p>

          <a className={style.link} href='https://github.com/subramGrg/robot-simulator' target='_blank'>view repository</a>
        </article>
      </div>
    );
  }
}

export default Home;
