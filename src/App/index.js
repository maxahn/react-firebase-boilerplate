import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';
import * as ROUTES from '../constants/routes';
import LandingPage from '../scenes/LandingPage';
import { HomePage } from '../scenes/Home';
import { SignInPage } from '../scenes/SignIn';
import { SignUpPage } from '../scenes/SignUp';
import { AccountPage } from '../scenes/Account';
import { ProfilePage } from '../scenes/Profile';
import { PasswordForgetPage } from '../scenes/PasswordForget';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <NavigationBar />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGNUP} component={SignUpPage} />
        <Route path={ROUTES.SIGNIN} component={SignInPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
