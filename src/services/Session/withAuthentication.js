import React from 'react';
import PropTypes from 'prop-types';
import Firebase, { withFirebase } from '../Firebase';
import AuthUserContext from './context';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      const { firebase } = this.props;
      const { auth } = firebase;
      this.listener = auth.onAuthStateChanged(
        (authUser) => this.setState({ authUser }),
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.propTypes = {
    firebase: PropTypes.instanceOf(Firebase).isRequired,
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
