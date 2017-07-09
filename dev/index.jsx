import React from 'react';
import ReactDOM from 'react-dom';

// Use HashRouter instead of BrowserRouter
// because there is no server to match URLs
import { HashRouter as Router } from 'react-router-dom';

import App from './lib/app.jsx';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.querySelector('#root')
)
