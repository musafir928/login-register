import React from "react";

const Login = () => {
  return (
    <div className='container '>
      <div className='about'>
        <h1 className='large text-primary'>About</h1>
        <h3 className='lead'>
          This is a small login register app, built using MERN(MONGODB,
          EXPRESS.JS, REACT, NODE.JS). Users have a role: root, admin or user.
          user can:
        </h3>
        <ol>
          <li> Register;</li>
          <li>login</li>
          <h3 className='lead'>Root user:</h3>
          <li>Confirm user</li>
          <li>Update user role</li>
        </ol>
      </div>
    </div>
  );
};

export default Login;
