import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddits/SubredditsSlice'


export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
  },
});
