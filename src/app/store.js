import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddits/SubredditsSlice';
import postReducer from '../features/post/PostSlice';
import searchbarReducer from '../features/searchbar/SearchbarSlice';


export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
    post: postReducer,
    searchbar: searchbarReducer,
  },
});
