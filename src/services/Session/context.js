import React from 'react';
// import PropTypes from 'prop-types';
// import Firebase, { withFirebase } from '../Firebase';

const AuthUserContext = React.createContext(null);

// const withAuthentication = (Component) => {
//   class WithAuthentication extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         authUser: null,
//       };
//     }

//     componentDidMount() {
//       const { firebase } = this.props;
//       this.listener = firebase.auth.onAuthStateChanged(
//         (authUser) => {
//           const newAuthUser = authUser
//             ? this.setState({ authUser })
//             : this.setState({ authUser: null });
//           this.setState({ authUser: newAuthUser });
//         },
//       );
//     }

//     componentWillUnmount() {
//       this.listener();
//     }

//     render() {
//       const { authUser } = this.state;
//       return (
//         <AuthUserContext.Provider value={authUser}>
//           <Component {...this.props} />
//         </AuthUserContext.Provider>
//       );
//     }
//   }

//   WithAuthentication.propTypes = {
//     firebase: PropTypes.instanceOf(Firebase).isRequired,
//   };

//   return withFirebase(WithAuthentication);
// };

// const withAuthentication = (Component) => {
//   class WithAuthentication extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         authUser: null,
//       };
//     }

//     componentDidMount() {
//       const { firebase } = this.props;
//       const { auth } = firebase;
//       this.listener = auth.onAuthStateChanged((authUser) => this.setState({ authUser }));
//     }

//     componentWillUnmount() {
//       this.listener();
//     }

//     render() {
//       const { authUser } = this.state;
//       return (
//         <AuthUserContext.Provider value={authUser}>
//           <Component {...this.props} />
//         </AuthUserContext.Provider>
//       );
//     }
//   }

//   return withFirebase(WithAuthentication);
// };

// export { withAuthentication };
export default AuthUserContext;
