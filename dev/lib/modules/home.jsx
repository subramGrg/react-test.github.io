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

          <div className={style.container}>
            <h2 className={style.title}>Robot Simulator</h2>
            <span className={style.tag}>Ruby, RSpec</span>

            <p>A fun little Ruby application i developed that simulates a robot moving on a 5x5 unit table by giving commands. This is a non GUI based program.</p>

            <a className={style.link} href='https://github.com/subramGrg/robot-simulator' target='_blank'>view repository</a>
          </div>
        </article>

        <div className={style.timeline}>
          <h4>Earlier Projects</h4>
        </div>

        <div className={style['earlier-project']}>
          <div className={style['image-wrapper']}>
            <img src={img}/>
          </div>
          <div className={style.copy + " " + style.container}>
            <h3 className={style.title}>Shopping Cart experience</h3>
            <span className={style.tag}>Ruby, RSpec</span>

            <p>This program adds items from a YAML file to a cart and accumulates the total at the end of the application.</p>

            <a className={style.link} href='https://github.com/subramGrg/sim-cart' target='_blank'>view repository</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
