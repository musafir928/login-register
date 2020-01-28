import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../../context/user/userContext";

const UserItem = ({ user }) => {
  const userContext = useContext(UserContext);
  const { deleteUser, updateUser, confirmUser, getUsers } = userContext;

  const { name, email, confirmed, role, _id } = user;

  const handleDelete = () => {
    deleteUser(_id);
    getUsers();
  };

  const handleUpdate = () => {
    const newRole = role === "admin" ? "user" : "admin";
    updateUser(_id, newRole);
    getUsers();
  };

  const handleConfirm = () => {
    confirmUser(_id);
    getUsers();
  };

  return (
    <div className={"usercard " + role}>
      <h3 className='text-primary'>{name}</h3>
      <h3 className='text-primary'>{email}</h3>
      {confirmed === true ? (
        <button className='btn btn-primary' onClick={handleUpdate}>
          {role}
        </button>
      ) : (
        <button className='btn btn-success' onClick={handleConfirm}>
          confirm
        </button>
      )}
      <button className='btn btn-danger' onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
