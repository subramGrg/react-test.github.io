import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router-dom';
import Project from './projects.jsx';
import Home from './home.jsx';

class Section extends React.Component {
  render() {
    return (
      <section>
        <Route exact path='/' component={Home}/>
        <Route path='/project' component={Project}/>
      </section>
    );
  }
}

export default Section;
