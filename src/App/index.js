import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../services/Navigation';

const App = () => (
  <Router>
    <div>
      <h1>Boilerplate React and Firebase App</h1>
      <Navigation />
    </div>
  </Router>
);

export default App;
