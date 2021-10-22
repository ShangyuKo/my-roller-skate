import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import useFetch from "./useFetch";
import ItemList from "./ItemList";
import axios from 'axios';
import { useHistory } from "react-router";
import './Purchase.css'
import { Button } from './Button';

const Purchase = ({user_uid}) => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0,0]
      });


    const {data:onSale, error, isPending} = useFetch("http://localhost:7000/item_query");
    const json_parse = onSale;
    const onSaleItems =  JSON.parse(json_parse);

    const history = useHistory();

    const addOneItem = (id) => {
        console.log(id)
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

    // console.log('user_uid: ', user_uid.replace('-', ''));

    const purchaseHandler = () =>{
        const array1 = [1,2,3,4,5];
        // array1.forEach( element =>
            
        axios
        .post("http://localhost:7000/depost_order", {
            names: array1,
            quantity: order.buyQuantity,
            user_uid: user_uid

        }).then((data)=>{
                const res_data = data.data;
                
                console.log('res_data: ',res_data);
                if (res_data.length > 0){
                    alert(res_data);
                }
                else{
                    history.push("/payment");
                }

        })
        .catch((e) => {
            console.log(e);
            alert("failed", e);
        });

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
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => purchaseHandler()}>
                Purchase
            </Button> */}
            <button className='btn' onClick={() => purchaseHandler()}>Purchase</button>
        </div>
    );
}
 
export default Purchase;