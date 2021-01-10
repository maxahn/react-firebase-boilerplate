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

function PasswordChangeFormBase({ history, firebase }) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    const { passwordOne, passwordTwo } = values;
    if (passwordOne !== passwordTwo) {
      setError({
        message: 'Passwords do not match',
      });
      return;
    }
    firebase
      .doPasswordUpdate(passwordOne)
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
            New Password
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
                    {errors.passwordOne && errors.passwordOne.message}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="passwordOne"
                    type="password"
                    label="Enter new password"
                    name="passwordOne"
                    autoFocus
                    error={Boolean(errors.password)}
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
                <Grid item>
                  <Typography color="error" variant="caption">
                    {errors.passwordTwo && errors.passwordTwo.message}
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="passwordTwo"
                    type="password"
                    label="Enter new password again"
                    name="passwordTwo"
                    autoFocus
                    error={Boolean(errors.password)}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                color="primary"
              >
                Update Password
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

PasswordChangeFormBase.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const PasswordChangeForm = compose(withRouter, withFirebase)(PasswordChangeFormBase);

const PasswordChangePage = () => (
  <div>
    <PasswordChangeForm />
  </div>
);

export default PasswordChangeForm;
export { PasswordChangePage };
