import "./DishItem.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectAndSetUserPreference } from '../../redux/feature/usersDataSlice';

const DishItem = ({item, resultPage, rank, selectedDishes}) => {

    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.loggedInUserData);
    const usersData = useSelector(state => state.usersData);
    const currentUserData = usersData.filter(user => user.id === loggedInUser.userId);
    const backgroundColor = resultPage && rank === 0 ? "rgb(113 137 255)" : 
                    (rank === 1 ? "rgb(32 255 173)" : (rank === 2) ? "rgb(255 145 32)" : "rgb(255 77 93)" );

    const handlePreferenceSelect = (preferenceNum) => {
        const payload = {
            'loggedInUserId': loggedInUser.userId,
            'dishId': item.id,
            'preference': preferenceNum
        }
        dispatch(selectAndSetUserPreference(payload));        
    }

    return (
        <div className="item-container">
            <div className="column-divider">
                <div className="left-section">
                    <div className="img-container">
                        {resultPage && selectedDishes.includes(item.id) && <div className="curr-user-selected-dish"></div>}
                        <img src={item.image} alt={item.dishName} width="100%" height="100%"/>
                    </div>
                    <div className="item-details">
                        <div className="item-name">{item.dishName}</div>
                        <div className="item-descriotion">{item.description}</div>
                    </div>
                </div>

                {(!resultPage ? 
                    <div className="preference-list">
                        <div className={"preference-num" + (currentUserData[0].firstPref === item.id ? " selected" : "")} onClick={() => handlePreferenceSelect('first')}>1</div>
                        <div className={"preference-num" + (currentUserData[0].secondPref === item.id ? " selected" : "")} onClick={() => handlePreferenceSelect('second')}>2</div>
                        <div className={"preference-num" + (currentUserData[0].thirdPref === item.id ? " selected" : "")} onClick={() => handlePreferenceSelect('third')}>3</div>
                    </div>
                    :
                    <div className="score-container">
                        <div className={"score"} style={{backgroundColor: backgroundColor}}>{item.result}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DishItem;