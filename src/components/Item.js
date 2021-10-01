import React from "react"; 
import './Items.css';

function Item({item, order, addOneItem, delOneItem}) {
    const quantity = order.buyQuantity;
    
    return(
        <div className="items-preview" key={item.Id}>
            <img className="item_picture" src={item.PicLink} alt="item picture" />
            <h2>{item.Item}</h2>
            <p>Price: {Number(item.Price).toFixed(2)}, Quantity: {quantity[item.Id-1]}
            <button style={{float: 'right'}} onClick={() => addOneItem(item.Id-1)}>add Item</button>
            <button style={{float: 'right'}} onClick={() => delOneItem(item.Id-1)}>delete Item</button>
            </p>
        </div>
    )
}

export default Item