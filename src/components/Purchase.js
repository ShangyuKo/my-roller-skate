// import React, {useState} from "react";
import useFetch from "./useFetch";
import ItemList from "./ItemList";
import './Purchase.css'
import { useHistory } from "react-router";

const Purchase = ({order, setOrder}) => {
    const {data:onSaleItems, error, isPending} = useFetch("http://localhost:8000/onSaleItems");
    const history = useHistory();

    const addOneItem = (id) => {
        let newOrder = order;
        newOrder.buyQuantity[id] = order.buyQuantity[id] + 1;
        setOrder({...newOrder});
    }

    const delOneItem = (id) => {
        let newOrder = order;
        if(order.buyQuantity[id] > 0){
            newOrder.buyQuantity[id] = order.buyQuantity[id] - 1;
            setOrder({...newOrder});
        }
    }

    const purchaseHandler = () =>{
        var num = order.buyQuantity[0]*onSaleItems[0].price +
                order.buyQuantity[1]*onSaleItems[1].price +
                order.buyQuantity[2]*onSaleItems[2].price +
                order.buyQuantity[3]*onSaleItems[3].price +
                order.buyQuantity[4]*onSaleItems[4].price;
        const newOrder = {...order, totalPrice: num.toFixed(2)};
        setOrder({...newOrder});
        history.push("/payment");
    }

    return (
        <div className="purchase">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {onSaleItems &&
                <ItemList items={onSaleItems} 
                        order={order}
                        addOneItem={addOneItem} 
                        delOneItem={delOneItem} 
                        title="All Products"/>
            }
            <button style={{float: 'right'}} onClick={() => purchaseHandler()}>Purchase</button>
        </div>
    );
}
 
export default Purchase;