import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import Firebase, { FirebaseContext } from '../../services/Firebase';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMessage: {
    color: theme.palette.error,
  },
}));

export default function SignUp({ firebase }) {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);
  const isDisabled = Boolean(
    errors.firstName || errors.lastName || errors.email || errors.password,
  );

  const onSubmit = (values) => {
    const {
      firstName, lastName, email, password,
    } = values;
    firebase
      .doCreateUserWithEmailAndPassword(email, password, firstName, lastName)
      .then(() => {
        // TODO: redirect
      })
      .catch((err) => {
        // TODO: implement flash message system
        setError(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography color="error" variant="caption">
                {error && error.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography color="error" variant="caption">
                    {errors.firstName && errors.firstName.message}
                    {errors.lastName && ' ‏‏‎ '}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={Boolean(errors.firstName)}
                    inputRef={register({
                      required: 'Required',
                      reValidateMode: 'onChange',
                      minLength: 1,
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: 'No invalid characters or numbers',
                      },
                    })}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography color="error" variant="caption">
                    {errors.firstName && ' ‏‏‎ '}
                    {errors.lastName && errors.lastName.message}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    error={Boolean(errors.lastName)}
                    inputRef={register({
                      required: 'Required',
                      reValidateMode: 'onChange',
                      minLength: 1,
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: 'No invalid characters or numbers',
                      },
                    })}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography color="error" variant="caption">
                    {errors.email && errors.email.message}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={Boolean(errors.email)}
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
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography color="error" variant="caption">
                    {errors.password && errors.password.message}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    error={Boolean(errors.password)}
                    autoComplete="current-password"
                    inputRef={register({
                      required: 'Required',
                      reValidateMode: 'onChange',
                      minLength: {
                        value: 6,
                        message: 'Minimum 6 characters',
                      },
                    })}
                  />
                </Grid>
              </Grid>
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
            Sign Up
          </Button>
          <Grid container alignItems="flex-end">
            <Grid item>
              <Link component={RouterLink} to={ROUTES.SIGNIN} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

SignUp.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
};

const SignUpPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => <SignUp firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export { SignUpPage };
