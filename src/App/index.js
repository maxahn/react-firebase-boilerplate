import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const App = () => (
  <Router>
    <div>
      <NavigationBar />
      <h1>Boilerplate React and Firebase App</h1>
    </div>
  </Router>
);

export default App;
