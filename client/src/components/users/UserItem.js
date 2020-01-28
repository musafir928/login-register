import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../../context/user/userContext";

const UserItem = ({ user }) => {
  const userContext = useContext(UserContext);
  const { deleteUser, updateUser, confirmUser } = userContext;

  const { name, email, confirmed, role, id } = user;

  const handleDelete = () => {
    deleteUser(id);
  };

  const handleUpdate = () => {
    updateUser(id, role);
  };

  const handleConfirm = () => {
    confirmUser(id);
  };

  return (
    <div className={"usercard " + role}>
      <h3 className='text-primary'>{name}</h3>
      <h3 className='text-primary'>{email}</h3>
      {confirmed === "true" ? (
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
