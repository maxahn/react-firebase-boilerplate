import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import Firebase, { withFirebase } from '../../services/Firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function PasswordForgetFormBase({ history, firebase }) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const { handleSubmit, register, errors } = useForm();
  const isDisabled = Boolean(errors.email);

  const onSubmit = (values) => {
    const { email } = values;
    firebase
      .doPasswordReset(email)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography color="error" variant="caption">
                  {error && error.message}
                </Typography>
              </Grid>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography color="error" variant="caption">
                    {errors.email && errors.email.message}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={Boolean(errors.lastName)}
                    inputRef={register({
                      required: 'Required',
                      reValidateMode: 'onChange',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                color="primary"
                disabled={isDisabled}
              >
                Send Password Reset
              </Button>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

PasswordForgetFormBase.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const PasswordForgetForm = compose(withRouter, withFirebase)(PasswordForgetFormBase);

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

export default PasswordForgetForm;
export { PasswordForgetPage };
