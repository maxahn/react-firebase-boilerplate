import React from 'react';
import { withAuthorization } from '../../services/Session';

const Home = () => <div> Home </div>;

const condition = (authUser) => !!authUser;
const HomePage = withAuthorization(condition)(() => <Home />);

export default Home;

export { HomePage };
