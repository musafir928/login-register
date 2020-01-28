import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import {
  DELETE_USER,
  CONFIRM_USER,
  UPDATE_USER,
  USER_ERROR,
  GET_USERS,
  CLEAR_USERS
} from "../types";

// set initial state
const UserState = props => {
  const initialState = {
    users: null,
    error: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // get users
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.message
      });
    }
  };

  // clear users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // update user
  const updateUser = async (id, role) => {
    try {
      axios.put(`api/users/${id}/${role}`);

      dispatch({ type: UPDATE_USER, payload: { id, role } });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg
      });
    }
  };
  // confirm user
  const confirmUser = async id => {
    try {
      await axios.post(`api/users/${id}`);
      dispatch({ type: CONFIRM_USER, payload: id });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg
      });
    }
  };
  // delete user
  const deleteUser = async id => {
    try {
      await axios.delete(`api/users/${id}`);
      dispatch({ type: DELETE_USER, payload: id });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        error: state.error,
        deleteUser,
        updateUser,
        confirmUser,
        getUsers,
        clearUsers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
