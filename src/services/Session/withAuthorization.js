import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './context';
import Firebase from '../Firebase';
import withAuthentication from './withAuthentication';
import * as ROUTES from '../../constants/routes';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { firebase, history } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(
        (authUser) => {
          if (!condition(authUser)) {
            history.push(ROUTES.SIGNIN);
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) => ((condition(authUser)) ? (<Component {...this.props} />) : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  WithAuthorization.propTypes = {
    firebase: PropTypes.instanceOf(Firebase).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  return compose(withAuthentication, withRouter)(WithAuthorization);
};

export default withAuthorization;
