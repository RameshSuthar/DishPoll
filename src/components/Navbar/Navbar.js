import "./Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/feature/loggedInUserDataSlice';

const Navbar = ({currentTab, onTabChange}) => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUserData);
    return (
        <nav>
            <ol>
                <li className={currentTab === "dishlist" ? "activeLink" : ""} onClick={() => {onTabChange("dishlist")}}>Dish list</li>
                <li className={currentTab === "pollresult" ? "activeLink" : ""} onClick={() => {onTabChange("pollresult")}}>Poll result</li>
            </ol>
            <div className="right-column">
                <div className="user-detail">
                    <img src="./icons8-user-24.png" width="24px" height="24px" alt="user-avatar"/>
                    <p>{loggedInUser.username[0].toUpperCase() + loggedInUser.username.substring(1)}</p>
                </div>

                <div className="logout-btn" onClick={() => dispatch(logout())}>LOGOUT</div>
            </div>
        </nav>
    )
}

export default Navbar;