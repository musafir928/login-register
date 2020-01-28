import React, { useReducer } from "react";
import uuid from "uuid";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { DELETE_USER, CONFIRM_USER, UPDATE_USER } from "../types";

// set initial state
const UserState = props => {
  const initialState = {
    users: [
      {
        id: "1",
        name: "adil",
        email: "12@gmail.com",
        role: "admin",
        confirmed: "true"
      },
      {
        id: "2",
        name: "adil1",
        email: "123@gmail.com",
        role: "admin",
        confirmed: "false"
      },
      {
        id: "3",
        name: "adil2",
        email: "124@gmail.com",
        role: "user",
        confirmed: "true"
      }
    ]
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // update user
  const updateUser = (id, role) => {
    dispatch({ type: UPDATE_USER, payload: { id, role } });
  };
  // confirm user
  const confirmUser = id => {
    dispatch({ type: CONFIRM_USER, payload: id });
  };
  // delete user
  const deleteUser = id => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  return (
    <UserContext.Provider
      value={{ users: state.users, deleteUser, updateUser, confirmUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
