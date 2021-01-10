import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PasswordChangeForm from '../PasswordChange';
import PasswordForgetForm from '../PasswordForget';

const Account = () => (
  <Container component="main" maxWidth="xs">
    <Typography component="h1" variant="h4">
      Account
    </Typography>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </Container>
);
const AccountPage = () => <Account />;

export default Account;
export { AccountPage };
