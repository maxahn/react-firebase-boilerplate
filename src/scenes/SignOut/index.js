import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Firebase, { withFirebase } from '../../services/Firebase';

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut} variant="outlined" color="secondary">
    Sign Out
  </Button>
);

SignOutButton.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
};

export default withFirebase(SignOutButton);
