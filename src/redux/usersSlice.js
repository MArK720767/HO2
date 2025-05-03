import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const predefinedUsers = [
  { id: 1, name: "Nieverts Nieverts", email: "nieverts.nieverts55@example.com" },
  { id: 2, name: "Ronjerick Gamberts", email: "ronjerick.gamberts18@example.com" },
  { id: 3, name: "Jerome Oblemea", email: "jerome.oblemea94@example.com" },
  { id: 4, name: "Edwong Sulfur", email: "edwong.sulfur61@example.com" },
  { id: 5, name: "Albert BatangAma", email: "albert.batangama83@example.com" },
  { id: 6, name: "Nieverts Nieverts", email: "nieverts.nieverts42@example.com" },
  { id: 7, name: "Edwong Sulfur", email: "edwong.sulfur37@example.com" },
  { id: 8, name: "Jerome Oblemea", email: "jerome.oblemea12@example.com" },
  { id: 9, name: "Albert BatangAma", email: "albert.batangama24@example.com" },
  { id: 10, name: "Ronjerick Gamberts", email: "ronjerick.gamberts76@example.com" },
  { id: 11, name: "Edwong Sulfur", email: "edwong.sulfur29@example.com" },
  { id: 12, name: "Jerome Oblemea", email: "jerome.oblemea35@example.com" },
  { id: 13, name: "Ronjerick Gamberts", email: "ronjerick.gamberts48@example.com" },
  { id: 14, name: "Nieverts Nieverts", email: "nieverts.nieverts16@example.com" },
  { id: 15, name: "Albert BatangAma", email: "albert.batangama63@example.com" },
  { id: 16, name: "Edwong Sulfur", email: "edwong.sulfur88@example.com" },
  { id: 17, name: "Jerome Oblemea", email: "jerome.oblemea26@example.com" },
  { id: 18, name: "Ronjerick Gamberts", email: "ronjerick.gamberts30@example.com" },
  { id: 19, name: "Nieverts Nieverts", email: "nieverts.nieverts81@example.com" },
  { id: 20, name: "Albert BatangAma", email: "albert.batangama02@example.com" },
  { id: 21, name: "Jerome Oblemea", email: "jerome.oblemea67@example.com" },
  { id: 22, name: "Edwong Sulfur", email: "edwong.sulfur15@example.com" },
  { id: 23, name: "Ronjerick Gamberts", email: "ronjerick.gamberts97@example.com" },
  { id: 24, name: "Nieverts Nieverts", email: "nieverts.nieverts40@example.com" },
  { id: 25, name: "Albert BatangAma", email: "albert.batangama71@example.com" },
  { id: 26, name: "Edwong Sulfur", email: "edwong.sulfur07@example.com" },
  { id: 27, name: "Jerome Oblemea", email: "jerome.oblemea51@example.com" },
  { id: 28, name: "Nieverts Nieverts", email: "nieverts.nieverts99@example.com" },
  { id: 29, name: "Ronjerick Gamberts", email: "ronjerick.gamberts59@example.com" },
  { id: 30, name: "Albert BatangAma", email: "albert.batangama92@example.com" },
  { id: 31, name: "Edwong Sulfur", email: "edwong.sulfur84@example.com" },
  { id: 32, name: "Jerome Oblemea", email: "jerome.oblemea03@example.com" },
  { id: 33, name: "Nieverts Nieverts", email: "nieverts.nieverts28@example.com" },
  { id: 34, name: "Albert BatangAma", email: "albert.batangama44@example.com" },
  { id: 35, name: "Ronjerick Gamberts", email: "ronjerick.gamberts11@example.com" },
  { id: 36, name: "Edwong Sulfur", email: "edwong.sulfur66@example.com" },
  { id: 37, name: "Jerome Oblemea", email: "jerome.oblemea38@example.com" },
  { id: 38, name: "Nieverts Nieverts", email: "nieverts.nieverts20@example.com" },
  { id: 39, name: "Albert BatangAma", email: "albert.batangama87@example.com" },
  { id: 40, name: "Edwong Sulfur", email: "edwong.sulfur13@example.com" },
  { id: 41, name: "Ronjerick Gamberts", email: "ronjerick.gamberts90@example.com" },
  { id: 42, name: "Jerome Oblemea", email: "jerome.oblemea79@example.com" },
  { id: 43, name: "Albert BatangAma", email: "albert.batangama19@example.com" },
  { id: 44, name: "Ronjerick Gamberts", email: "ronjerick.gamberts25@example.com" },
  { id: 45, name: "Nieverts Nieverts", email: "nieverts.nieverts06@example.com" },
  { id: 46, name: "Edwong Sulfur", email: "edwong.sulfur99@example.com" },
  { id: 47, name: "Jerome Oblemea", email: "jerome.oblemea21@example.com" },
  { id: 48, name: "Albert BatangAma", email: "albert.batangama36@example.com" },
  { id: 49, name: "Ronjerick Gamberts", email: "ronjerick.gamberts73@example.com" },
  { id: 50, name: "Edwong Sulfur", email: "edwong.sulfur58@example.com" }
];


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  await new Promise(resolve => setTimeout(resolve, 5000)); 
  return predefinedUsers;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
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
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { deleteUser, addUser } = usersSlice.actions;
export default usersSlice.reducer;
