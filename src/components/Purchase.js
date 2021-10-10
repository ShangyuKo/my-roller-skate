import React, {useState, useEffect} from "react";
import useFetch from "./useFetch";
import ItemList from "./ItemList";
import axios from 'axios';
import { useHistory } from "react-router";
import './Purchase.css'
import { Button } from './Button';


const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0,0]
      });

    // const [onSaleItems,setdata]=useState([]);
    const {data:onSale, error, isPending} = useFetch("http://localhost:7000/item_query");
    // const [res_data, setresponse] = useState('');
    // const [res_data, setresponse] = useState(null);
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

    const purchaseHandler = () =>{
        const array1 = [1,2,3,4,5];
        // array1.forEach( element =>
            
        axios
        .post("http://localhost:7000/depost_order", {
            names: array1,
            quantity: order.buyQuantity
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

        // console.log('res_data: ',res_data);
        // if (res_data.length > 0){
        //     alert(res_data);
        // }
        // // else{
            
        // }
        // axios.get("http://localhost:7000/item_query").then((data)=>{
        //     // console.log('data: ', data);
        //     const data_ = JSON.stringify(data.data);
        //     setData(data_);
        //     setError(null);
        //     setIsPending(false);
        // });

        // history.push("/payment");
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