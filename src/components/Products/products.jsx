import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Product from './Product/product';
import axios from 'axios';
import useFetch from "../useFetch";
import ItemList from "../ItemList";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// const products = [
//     {Id:1, Item:"pad", Price:300, quantity:10, picLink: "https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//     {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//     {Id:2, Item:"Helmet", Price:20, quantity:5, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//     {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//     {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
// ];

const Products = () => {
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
            // user_uid: user_uid

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
    function refreshPage(link){ 
        window.location.href = link
      }

    return(
        <div>
            {/* <Grid container justify="center" spacing={4}> */}
                {/* {products.map((product) => ( */}
                    {/* <Grid item key={products.Id} xs={12} sm={6} lg={3}> */}
                        {/* <Product product={onSaleItems}/> */}
                        
            
                        {/* <Product product={product}/> */}
                    {/* </Grid> */}
                      {/* {onSaleItems && */}
                    {/* //     <ItemList items={onSaleItems}  */}
                    {/* //             order={order} */}
                    {/* //             addOneItem={addOneItem}  */}
                    {/* //             delOneItem={delOneItem}  */}
                    {/* //             title="All Products"/> */}
                    {/* // } */}
             {/* //   ))} */}
            {/* //</Grid> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
                    
            {onSaleItems &&
                <ItemList items={onSaleItems} 
                        order={order}
                        addOneItem={addOneItem} 
                        delOneItem={delOneItem} 
                        title="All Products"/>
            }
            <button className='btn' onClick={() => purchaseHandler()}>Purchase</button>
        </div>
    )
   
}
 export default Products;