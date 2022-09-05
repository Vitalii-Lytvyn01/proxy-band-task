import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUserId: 0,
  usersList: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state,action) => {
      state.usersList = action.payload;
    },
    selectUser: (state,action) => {
      state.selectedUserId = action.payload;
    }
  }
});

export const {setUsers, selectUser} = usersSlice.actions;

export default usersSlice.reducer;