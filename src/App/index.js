import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Firebase, { withFirebase } from '../services/Firebase';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';
import * as ROUTES from '../constants/routes';
import LandingPage from '../scenes/LandingPage';
import { HomePage } from '../scenes/Home';
import { SignInPage } from '../scenes/SignIn';
import { SignUpPage } from '../scenes/SignUp';
import { AccountPage } from '../scenes/Account';
import { ProfilePage } from '../scenes/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    const { firebase } = this.props;
    firebase.auth.onAuthStateChanged((authUser) => this.setState({ authUser }));
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const { authUser } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <NavigationBar authUser={authUser} />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGNUP} component={SignUpPage} />
            <Route path={ROUTES.SIGNIN} component={SignInPage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.PROFILE} component={ProfilePage} />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
};

export default withFirebase(App);
