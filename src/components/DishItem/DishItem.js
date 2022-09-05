const DishItem = ({item}) => {
    return (
        <div className="item-container">
            <div className="column-divider">
                <img src="" alt={item.dishName} />
                <div className="item-details">
                    <div className="item-name">{item.dishName}</div>
                    <div className="item-descriotion">{item.dishDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default DishItem;