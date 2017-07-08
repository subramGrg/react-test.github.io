import React from 'react';

import Header from './modules/header.jsx'
import Section from './modules/section.jsx'

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Section />
      </main>
    );
  }
}

export default App;
