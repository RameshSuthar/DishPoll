import DishItem from "../DishItem/DishItem";

const DishList = ({list}) => {

    const dishList = list.map(item => <DishItem item={item} />)

    return (
        <>
            { list.length > 0 && dishList }
        </>
    )
}

export default DishList;