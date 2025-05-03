import React from 'react';
import UserList from './features/users/UserList';
import AddUserForm from './features/users/AddUserForm';
import './index.css';

function App() {
  return (
    <div className="App">
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;
