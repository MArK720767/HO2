import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  return (
    <div>
      <h2>-User List-</h2>
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <strong>{user.name}</strong> — {user.email}
          <button
            onClick={() => dispatch(deleteUser(user.id))}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
