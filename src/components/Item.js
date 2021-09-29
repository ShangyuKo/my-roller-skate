import React from "react"; 

function Item({item, order, addOneItem, delOneItem}) {
    const quantity = order.buyQuantity;
    
    return(
        <div className="items-preview" key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: {Number(item.price).toFixed(2)}, Quantity: {quantity[item.id]}
            <img className="item_picture" src={item.picLink} alt="item picture" />
            <button style={{float: 'right'}} onClick={() => addOneItem(item.id)}>add Item</button>
            <button style={{float: 'right'}} onClick={() => delOneItem(item.id)}>delete Item</button>
            </p>
        </div>
    )
}

export default Item