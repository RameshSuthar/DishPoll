const DishList = ({list}) => {

    const dishList = list.map(item => {
        return (
            <div>{item.dishName}</div>
        );
    })

    return (
        <>
            { list.length > 0 && dishList }
        </>
    )
}

export default DishList;