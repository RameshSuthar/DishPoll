import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null,
    isLoggedIn: false,
    userId: null
}

/** Action payload body which will be dispatched from the component
 * action.payload = {
 *  username
 * }
 */

export const loggedInUserDataSlice = createSlice({
  name: 'loggedInUserData',
  initialState,
  reducers: {
    login: function(state, action) {
        state.username = action.payload.username;
        state.userId = action.payload.id;
        state.isLoggedIn = true;
    },
    logout: function(state, action) {
        state.username = null;
        state.userId = null;
        state.isLoggedIn = false;
  },
}
});

export const { login, logout } = loggedInUserDataSlice.actions

export default loggedInUserDataSlice.reducer