import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null,
    isLoggedIn: false
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
        console.log(action);
        state.username = action.payload.username;
        state.isLoggedIn = true;
    },
    logout: function(state, action) {
        state.username = null;
        state.isLoggedIn = false;
  },
}
});

export const { login, logout } = loggedInUserDataSlice.actions

export default loggedInUserDataSlice.reducer