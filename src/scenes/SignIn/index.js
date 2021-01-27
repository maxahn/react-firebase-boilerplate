import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'recompose';
import Firebase, { withFirebase } from '../../services/Firebase';
import * as ROUTES from '../../constants/routes';

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInFormBase({ firebase, history }) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    const { email, password } = values;
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const isDisabled = Boolean(errors.email || errors.password);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography color="error" variant="caption">
                  {errors.password && errors.password.message}
                </Typography>
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={Boolean(errors.password)}
                inputRef={register({
                  isRequired: 'Required',
                  reValidateMode: 'onChange',
                })}
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
              disabled={isDisabled}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to={ROUTES.PASSWORD_FORGET} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to={ROUTES.SIGNUP} variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

SignInFormBase.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

export { SignInPage };
