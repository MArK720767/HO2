import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/usersSlice';

function UserList() {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong> <span>({user.email})</span>
            </div>
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
