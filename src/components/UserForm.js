import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/usersSlice';

function UserForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    dispatch(addUser(form));
    setForm({ name: '', email: '' });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
