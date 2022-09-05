import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Navbar from "../Navbar/Navbar";
import DishList from "../DishList/DishList";
import PollResult from "../PollResult/PollResult";

const Home = () => {
    const loggedInUser = useSelector(state => state.loggedInUserData);
    const [dishList, setDishList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('dishlist');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
            .then((res) => res.json())
            .then(body => {
                setDishList(body);
            })
            .catch(err => {
                setError(err);
            })
    }, []);

    const handleTabChange = (val) => {
        setActiveTab(val);
    }

    return (
        <>
            <Navbar currentTab={activeTab} onTabChange={handleTabChange}/>
            {
                activeTab === "dishlist" ? 
                <DishList list={dishList}/> : <PollResult />
            }
        </>
    )
}


export default Home;