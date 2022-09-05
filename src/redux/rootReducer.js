import usersDataSlice from "./feature/usersDataSlice";
import loggedInUserDataSlice from "./feature/loggedInUserDataSlice";

const rootReducer = {
    usersData: usersDataSlice,
    loggedInUserData: loggedInUserDataSlice,
}

export default rootReducer;