import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/usersSlice';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Add User</h1>
      <UserForm />
      {loading && <div className="spinner">Loading...</div>}
      {error && <p>Error: {error}</p>}
      {!loading && <UserList />}
    </div>
  );
}

export default App;
