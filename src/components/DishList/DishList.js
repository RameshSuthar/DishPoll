import DishItem from "../DishItem/DishItem";

const DishList = ({list}) => {

    const dishList = list.map(item => <DishItem key={item.id} item={item} />)

    return (
        <>
            { (list.length > 0 ? dishList : <h2 className="msg">No Dishes List found in DB...</h2>) }
        </>
    )
}

export default DishList;