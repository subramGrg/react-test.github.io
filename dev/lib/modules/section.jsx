import React from 'react';

import { Route } from 'react-router-dom';
import Project from './projects.jsx';
import Home from './home.jsx';
import ToDo from './to_do.jsx';

class Section extends React.Component {
  render() {
    return (
      <section>
        <Route exact path='/' component={Home}/>
        <Route path='/project' component={Project}/>
        <Route path='/to-do' component={ToDo}/>
      </section>
    );
  }
}

export default Section;
