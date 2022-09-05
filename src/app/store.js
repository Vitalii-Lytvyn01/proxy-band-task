import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/Main/usersSlice';
import postsReducer from '../features/Posts/postsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
