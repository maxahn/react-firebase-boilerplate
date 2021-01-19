import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Firebase, { withFirebase } from '../../services/Firebase';
import { withAuthorization } from '../../services/Session';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const { firebase } = this.props;

    firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.users().on().off();
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        { loading && <div>Loading ... </div>}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong>
          {user.uid}
        </span>
        <span>
          <strong>E-Mail: </strong>
          {user.email}
        </span>
      </li>
    ))}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
  })).isRequired,
};

AdminPage.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
  })).isRequired,
};

const condition = (authUser) => authUser && authUser.role === 'ADMIN';
const AuthorizedAdminPage = withAuthorization(condition)(() => <AdminPage />);

export default withFirebase(AuthorizedAdminPage);
