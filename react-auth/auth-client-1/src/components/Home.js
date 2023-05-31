import React from 'react';
// import { useLocation } from 'react-router-dom';

const Home = ({ user }) => {
  // const location = useLocation();
  // const user = location.state.user;
  return (
    <div className='contents'>
      <div className='dashboard'>
        <div> <h2>Welcome to the Dashboard</h2></div>
        <div> {user && <p>Hello, {user.names}!</p>}</div>
      </div>
    </div>
  );
};
export default Home;

