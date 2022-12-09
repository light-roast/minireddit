import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from '../features/Post/redditSlice';
import subRedditReducer from '../features/Subreddits/subRedditsSlice';

export default configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});
