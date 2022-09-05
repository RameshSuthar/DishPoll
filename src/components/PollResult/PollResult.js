import DishItem from "../DishItem/DishItem";

const PollResult = ({list, selectedDishes}) => {
    const dishList = list.map((item, index) => <DishItem item={item} selectedDishes={selectedDishes} resultPage key={item.id} rank={index}/>);

    return (
        <>
            { list.length > 0 && dishList }
        </>
    )
}

export default PollResult;