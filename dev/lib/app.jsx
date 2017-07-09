import React from 'react';

import Header from './modules/header.jsx'
import Section from './modules/section.jsx'

import style from './stylesheets/Base.scss'

class App extends React.Component {
  render() {
    return (
      <main className={style.wrapper}>
        <Header />
        <Section />
        <Footer />
      </main>
    );
  }
}

export default App;
