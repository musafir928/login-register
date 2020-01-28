import React, { Fragment, useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const { clearUsers } = userContext;

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
    clearUsers();
  };

  const authLinks = (
    <ul>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-home' /> Home
        </Link>
      </h1>
      <>{isAuthenticated ? authLinks : guestLinks}</>
    </nav>
  );
};

export default Navbar;
