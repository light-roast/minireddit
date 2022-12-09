import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from '../../api/reddit';

const subRedditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
      },
    reducers: {
      startGetSubreddits(state) {
        state.isLoading = true;
        state.error = false;
      },
      getSubredditsSuccess(state, action) {
        state.isLoading = false;
        state.subreddits = action.payload;
      },
      getSubredditsFailed(state) {
        state.isLoading = false;
        state.error = true;
      },
    },
});

export const {
    getSubredditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
  } = subRedditSlice.actions;

  export default subRedditSlice.reducer;

  export const fetchSubreddits = () => async (dispatch) => {
    try {
      dispatch(startGetSubreddits());
      const subreddits = await getSubreddits();
      dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
      dispatch(getSubredditsFailed());
    }
  };