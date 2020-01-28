import React, { useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";
import UserItem from "./UserItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AuthContext from "../../context/auth/authContext";
import Spinner from "../layout/Spinner";

const Users = () => {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const { users, getUsers, loading } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  if (users !== null && users.length === 0 && !loading) {
    return <h4>no user found</h4>;
  }

  if (user !== null && user.role !== "root") {
    return <h1></h1>;
  }

  return (
    <>
      <div>
        <h3 className=' text-primary'>Users List</h3>
        {users !== null && !loading ? (
          <TransitionGroup>
            {user.role === "root" &&
              users.map(u => (
                <CSSTransition key={u._id} timeout={500} classNames='item'>
                  <UserItem user={u} />
                </CSSTransition>
              ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Users;
