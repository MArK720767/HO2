import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Ronjerick Oblemea', email: 'ronjerick.oblemea@example.com' },
    { id: 2, name: 'Jirum Gamberts', email: 'jirum.gamberts@example.com' },
    { id: 3, name: 'Albert Sulfur', email: 'albert.sulfur@example.com' },
    { id: 4, name: 'Nieverts Mura', email: 'nieverts.mura@example.com' },
    { id: 5, name: 'Edwong Nieverts', email: 'edwong.nieverts@example.com' },
    { id: 6, name: 'Gamberts Edwong', email: 'gamberts.edwong@example.com' },
    { id: 7, name: 'Sulfur Ronjerick', email: 'sulfur.ronjerick@example.com' },
    { id: 8, name: 'Jirum Mura', email: 'jirum.mura@example.com' },
    { id: 9, name: 'Albert Oblemea', email: 'albert.oblemea@example.com' },
    { id: 10, name: 'Nieverts Gamberts', email: 'nieverts.gamberts@example.com' },
    { id: 11, name: 'Oblemea Jirum', email: 'oblemea.jirum@example.com' },
    { id: 12, name: 'Mura Nieverts', email: 'mura.nieverts@example.com' },
    { id: 13, name: 'Gamberts Ronjerick', email: 'gamberts.ronjerick@example.com' },
    { id: 14, name: 'Sulfur Edwong', email: 'sulfur.edwong@example.com' },
    { id: 15, name: 'Ronjerick Mura', email: 'ronjerick.mura@example.com' },
    { id: 16, name: 'Albert Gamberts', email: 'albert.gamberts@example.com' },
    { id: 17, name: 'Nieverts Sulfur', email: 'nieverts.sulfur@example.com' },
    { id: 18, name: 'Edwong Oblemea', email: 'edwong.oblemea@example.com' },
    { id: 19, name: 'Mura Albert', email: 'mura.albert@example.com' },
    { id: 20, name: 'Jirum Nieverts', email: 'jirum.nieverts@example.com' },
  ],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        ...action.payload
      };
      state.users.push(newUser);
    },
  }
});

export const { deleteUser, addUser } = userSlice.actions;
export default userSlice.reducer;
