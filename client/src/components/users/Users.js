import React, { useContext } from "react";
import UserContext from "../../context/user/userContext";
import UserItem from "./UserItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Users = () => {
  const userContext = useContext(UserContext);

  const { users } = userContext;

  return (
    <>
      <TransitionGroup>
        {users.length > 0 ? (
          users.map(user => (
            <CSSTransition key={user.id} timeout={500} classNames='item'>
              <UserItem user={user} />
            </CSSTransition>
          ))
        ) : (
          <h5 className='large text-primary'> no users found</h5>
        )}
      </TransitionGroup>
    </>
  );
};

export default Users;
