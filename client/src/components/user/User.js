import React, { useState, useEffect, useContext } from "react";
import Users from "../users/Users";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const User = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div style={{ borderBottom: "2px solid black", margin: "5px" }}>
        <h3 className=' text-primary'>Welcome to dash board!</h3>
      </div>
      <Users />
    </div>
  );
};

export default User;
