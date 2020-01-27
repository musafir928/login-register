import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = () => {
  const authLinks = (
    <ul>
      <li>
        <button onClick={() => <Redirect to='login' />}>
          <Link to='/login'>
            <i className='fas fa-sign-out-alt' />{" "}
            <span className='hide-sm'>Logout</span>
          </Link>
        </button>
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
      <>
        {authLinks} {guestLinks}
      </>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Navbar;
