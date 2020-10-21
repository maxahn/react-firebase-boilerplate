import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import theme from '../styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <NavigationBar />
        <h1>Boilerplate React and Firebase App</h1>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
