import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddits/SubredditsSlice';
import postReducer from '../features/post/PostSlice'


export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
    post: postReducer,
  },
});
