import "./Navbar.css";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/feature/loggedInUserDataSlice';

const Navbar = ({currentTab, onTabChange}) => {
    const dispatch = useDispatch();


    return (
        <nav>
            <ol>
                <li className={currentTab === "dishlist" ? "activeLink" : ""} onClick={() => {onTabChange("dishlist")}}>Dish list</li>
                <li className={currentTab === "pollresult" ? "activeLink" : ""} onClick={() => {onTabChange("pollresult")}}>Poll result</li>
            </ol>
            <div className="logout-btn" onClick={() => dispatch(logout())}>LOGOUT</div>
        </nav>
    )
}

export default Navbar;