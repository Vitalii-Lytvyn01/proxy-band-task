import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsList: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postsList = action.payload;
    }
  }
});

export const {setPosts} = postsSlice.actions;

export default postsSlice.reducer;