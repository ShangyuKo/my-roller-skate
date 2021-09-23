import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import useFetch from "./components/useFetch";

const Confirm = ({order, setOrder}) => {
    const {data:onSaleItems, error, isPending} = useFetch("http://localhost:8000/onSaleItems");
    const history = useHistory();
    // const [isLoading, setIsLoading] = useState(true);
    const [productsIdx, setProductsIdx] = useState([0,1,2,3,4])
    
    // useEffect(() => {
    //     if(!isPending){
    //         for (var i = 0; i < 5; i++) {
    //             console.log(i, order.buyQuantity[i], onSaleItems[i].name);
    //             if(order.buyQuantity[i] > 0){
    //                 console.log(i);
    //                 setProductsIdx(productsIdx => [...productsIdx, i])
    //                 console.log(productsIdx);
    //             }
    //         } 
    //         console.log(productsIdx);
    //         setIsLoading(false);
    //     }
    // }, [isPending])

    return (
        <div>
            <h1>This is your order, {order.shippingInfo.name}</h1>
            <br/>
            <br/>
            <h2>Your Products</h2>
            {!isPending && (
                    productsIdx.map(productIdx => (
                        <h3>
                            <div style={{textAlign:'left'}}>
                                {onSaleItems[productIdx].name}: {order.buyQuantity[productIdx]}
                            </div>
                            <div style={{textAlign:'right'}}>
                                {(onSaleItems[productIdx].price*order.buyQuantity[productIdx]).toFixed(2)}
                            </div>
                        </h3>
                        // <h3>{onSaleItems[productIdx].name}: {order.buyQuantity[productIdx]}</h3>
                        // <h3 style="float:right;">test</h3>
                        // <h3>{order.buyQuantity[productIdx]}</h3>
                    ))
                )
            }
            <div style={{"textAlign":'right'}}><h3>Total price: {order.totalPrice}</h3></div>
            {/* <h3 style="float:right;">Total price: {order.totalPrice}</h3> */}
            <br/>
            <h2>Card Information</h2>
            <h3>Card Number: {order.paymentInfo.creditCardNumber}</h3>
            <br/>
            <h2>Shipment Information</h2>
            <h3>Name: {order.shippingInfo.name}</h3>
            <h3>Address Line 1: {order.shippingInfo.addressLine1}</h3>
            <h3>Address Line 2: {order.shippingInfo.addressLine2}</h3>
            <h3>City: {order.shippingInfo.city}, State: {order.shippingInfo.state}, Zip: {order.shippingInfo.zip}</h3>
            <br/>
            <button onClick={() => {history.goBack()}}>Back</button>
        </div>
    );
}
 
export default Confirm;