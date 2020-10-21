import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';
import * as ROUTES from '../constants/routes';
import LandingPage from '../scenes/LandingPage';
import { HomePage } from '../scenes/Home';
import { LoginPage } from '../scenes/Login';
import { SignUpPage } from '../scenes/SignUp';
import { AccountPage } from '../scenes/Account';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <NavigationBar />
        <h1>Boilerplate React and Firebase App</h1>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGNUP} component={SignUpPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
