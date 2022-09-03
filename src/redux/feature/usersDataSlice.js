import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        userName: 'virat',
        password: 'kohli',
        firstPref: 0, //firstPref will store the id of the dish to whom user has given first preference
        secondPref: 0, //secondPref will store the id of the dish to whom user has given second preference
        thirdPref: 0 //thirdPref will store the id of the dish to whom user has given third preference
    },
    {
        id: 2,
        userName: 'dhoni',
        password: 'singh',
        firstPref: 0,
        secondPref: 0,
        thirdPref: 0
    },
    {
        id: 3,
        userName: 'rohit',
        password: 'sharma',
        firstPref: 0,
        secondPref: 0,
        thirdPref: 0
    },
    {
        id: 4,
        userName: 'pandhya',
        password: 'hardhik',
        firstPref: 0,
        secondPref: 0,
        thirdPref: 0
    },
    {
        id: 5,
        userName: 'jadeja',
        password: 'ravindra',
        firstPref: 0,
        secondPref: 0,
        thirdPref: 0
    },
]

/** Action payload body which will be dispatched from the component
 * action.payload = {
 *  loggedInUserId,
 *  dishId,
 *  preference
 * }
 */

export const usersDataSlice = createSlice({
  name: 'allUserData',
  initialState,
  reducers: {
    selectAndSetUserPreference: function(state, action) {
        //find the index of the user who is currently loggedIn.
        const ind = state.findIndex(user => user.id === action.payload.loggedInUserId);

        if(action.payload.preference === 'first') {
            state[ind].firstPref = action.payload.dishId;
            //If the current selected dish id is already been selected for any other preference, 
            //then remove it from that preference
            if(state[ind].secondPref === action.payload.dishId) {
                state[ind].secondPref = 0;
            } else if(state[ind].thirdPref === action.payload.dishId) {
                state[ind].thirdPref = 0;
            }
        } else if(action.payload.preference === 'second') {
            state[ind].secondPref = action.payload.dishId;
            if(state[ind].firstPref === action.payload.dishId) {
                state[ind].firstPref = 0;
            } else if(state[ind].thirdPref === action.payload.dishId) {
                state[ind].thirdPref = 0;
            }
        } else if(action.payload.preference === 'third') {
            state[ind].thirdPref = action.payload.dishId;
            if(state[ind].secondPref === action.payload.dishId) {
                state[ind].secondPref = 0;
            } else if(state[ind].firstPref === action.payload.dishId) {
                state[ind].firstPref = 0;
            }
        }
    }
  },
});

export const { selectAndSetUserPreference } = usersDataSlice.actions

export default usersDataSlice.reducer