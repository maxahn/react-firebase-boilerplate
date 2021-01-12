import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PasswordChangeForm from '../PasswordChange';
import PasswordForgetForm from '../PasswordForget';
import { withAuthorization } from '../../services/Session';

const Account = () => (
  <Container component="main" maxWidth="xs">
    <Typography component="h1" variant="h4">
      Account
    </Typography>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </Container>
);
const condition = (authUser) => !!authUser;
const AccountPage = withAuthorization(condition)(() => <Account />);

export default Account;
export { AccountPage };
