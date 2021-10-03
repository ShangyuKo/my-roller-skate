import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import useFetch from "./useFetch";

const Confirm = () => {
    const history = useHistory();
    const [productsIdx, setProductsIdx] = useState([0,1,2,3,4])

    const [order, setOrder] = useState({
        item_name: {},
        item_price: [0,0,0,0,0,0],
        buyQuantity: [0,0,0,0,0,0],
        totalPrice: 0,
        paymentInfo: {
          creditCardNumber: '',
          expireDate: '',
          ccvCode: '',
          cardHolderName: ''
        },
        shippingInfo: {
          name: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zip: ''
        }
      });

      const [total_num, setDst] = useState(null);
      useEffect(()=>{
          axios.get("http://localhost:7000/order_query").then((data)=>{
              const data_ = JSON.parse(JSON.stringify(data.data));
              var total_num = 0;
              data_.forEach(order_ => {
                order.item_name[order_.Id-1] = order_.Item
                order.buyQuantity[order_.Id-1] = order_.quantity
                order.item_price[order_.Id-1] = order_.Price
                total_num = total_num + order_.quantity * order_.Price
              });
              order.totalPrice = total_num
  
              setOrder({...order});
          });
      },[])


    useEffect(()=>{
        axios.get("http://localhost:7000/card_query").then((data)=>{
            const data_ = JSON.parse(JSON.stringify(data.data));

            console.log(data_);
            order.paymentInfo.creditCardNumber = data_[0].card_number;
            order.paymentInfo.expireDate = data_[0].expiration_date;
            order.paymentInfo.ccvCode = data_[0].cvvCode;
            order.paymentInfo.cardHolderName = data_[0].holder_name;
            setOrder({...order});
        });
    },[])


    useEffect(()=>{
        axios.get("http://localhost:7000/address_query").then((data)=>{
            const data_ = JSON.parse(JSON.stringify(data.data));
            order.shippingInfo.name = data_[0].name
            order.shippingInfo.addressLine1 = data_[0].addressLine1
            order.shippingInfo.addressLine2 = data_[0].addressLine2
            order.shippingInfo.city = data_[0].city
            order.shippingInfo.state = data_[0].state
            order.shippingInfo.zip = data_[0].zip
            setOrder({...order});
        });
    },[])




    return (
        <div>
            <h1>This is your order, {order.shippingInfo.name}</h1>
            <br/>
            <br/>
            <h2>Your Products</h2>
            { (
                    productsIdx.map(productIdx => (
                        <h3>
                            <div style={{textAlign:'left'}}>
                                {order.item_name[productIdx]}: {order.buyQuantity[productIdx]}
                            </div>
                            <div style={{textAlign:'right'}}>
                                {(order.item_price[productIdx]*order.buyQuantity[productIdx]).toFixed(2)}
                            </div>
                        </h3>
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