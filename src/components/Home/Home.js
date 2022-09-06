import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Navbar from "../Navbar/Navbar";
import DishList from "../DishList/DishList";
import PollResult from "../PollResult/PollResult";
import "./Home.css";

const Home = () => {
    const loggedInUser = useSelector(state => state.loggedInUserData);
    const allUserData = useSelector(state => state.usersData);
    const [dishList, setDishList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('dishlist');
    //This list will have all the dishlist item object with one new property which is result(to store the poll result)
    const [dishListWithResult, setDishListWithResult] = useState([]); 
    const [currUserSelectedList, setCurrUserSelectedList] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
            .then((res) => res.json())
            .then(body => {
                setDishList(body);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })
    }, []);

    //every time all users data changes, recalculate the poll result
    useEffect(() => {
        if(dishList.length > 0) {
            const tempDishList = dishList.map((dish) => {
                return {...dish, result: 0}
            });
            allUserData.forEach((user) => {
                if(user.firstPref) {
                    tempDishList[user.firstPref - 1].result += 30;
                }
                if(user.secondPref) {
                    tempDishList[user.secondPref - 1].result += 20;
                }
                if(user.thirdPref) {
                    tempDishList[user.thirdPref - 1].result += 10;
                }
            });
            tempDishList.sort((dishA, dishB) => {
                return dishB.result - dishA.result;
            })
            setDishListWithResult(tempDishList);
        }

        //set the dishes selected by the current logged in user.
        const tempSelectedDishes = [];
        allUserData.forEach((user) => {
            if(user.id === loggedInUser.userId) {
                tempSelectedDishes.push(...[user.firstPref, user.secondPref, user.thirdPref])
            }
        })
        setCurrUserSelectedList(tempSelectedDishes);
    }, [allUserData, dishList]);

    const handleTabChange = (val) => {
        setActiveTab(val);
    }

    return (
        <>
            <Navbar currentTab={activeTab} onTabChange={handleTabChange}/>
            {loading && <h2 className="msg">Loading...</h2>}
            {error && <h2 className="msg">Couldn't fetch the dish data from the server.</h2>}
            {
                !loading && !error && 
                (activeTab === "dishlist" ? <DishList list={dishList}/> : 
                    <PollResult list={dishListWithResult} selectedDishes={currUserSelectedList}/>)
            }
        </>
    )
}


export default Home;