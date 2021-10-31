import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import { borderRadius } from "@mui/system";
import Button from './Button';
// import useFetch from "./useFetch";

const Confirm = ({user_uid}) => {

    console.log('user_uid: ', user_uid);

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

      useEffect(()=>{
        //   query the order info
        axios.get("http://localhost:7000/order_query", {
            params: {user_uid: user_uid}
        }).then((data)=>{
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
        //   query the card info
        axios.get("http://localhost:7000/card_query", {
            params: {user_uid: user_uid}
        }).then((data)=>{
            const data_ = JSON.parse(JSON.stringify(data.data));

            console.log(data_);
            order.paymentInfo.creditCardNumber = data_[0].card_number;
            order.paymentInfo.expireDate = data_[0].expiration_date;
            order.paymentInfo.ccvCode = data_[0].cvvCode;
            order.paymentInfo.cardHolderName = data_[0].holder_name;
            setOrder({...order});
        });
        // query the address info
        axios.get("http://localhost:7000/address_query", {
            params: {user_uid: user_uid}
        }).then((data)=>{
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

    const purchaseHandler = () =>{
        axios.post("http://localhost:8000/order_submit", order).then((data)=>{
            console.log('data: ', data);
        });
        history.goBack();
    }

    return (
        <div className="confirm">
            <h1>Order Information for , {order.shippingInfo.name}</h1>
            {/* <br/> */}
            <br/>
            
            <Box margin="10px" sx={{ p: 2, border: '4px solid', borderColor: '#c41581' , borderRadius: 5}}>
            <h2 >Your Products</h2>
                <Grid container spacing={4}  >
                    <Grid item xs={4}>
                        ITEM: 
                    </Grid>
                    <Grid item xs={4}>
                       QUANTITY: 
                    </Grid>
                    <Grid item xs={4}>
                       SUBTOTAL:
                    </Grid>
                </Grid>
                { (
                    productsIdx.map(productIdx => (
                        <Grid container spacing={2} >
                            <Grid item xs={4}>
                                {/* style={{textAlign:'left'}} */}
                                {order.item_name[productIdx]}: 
                            </Grid>

                            <Grid item xs={4}>
                                {/* style={{textAlign:'left'}} */}
                                {order.buyQuantity[productIdx]}
                            </Grid>

                            <Grid item xs={4}>
                                {/* style={{textAlign:'right'}} */}
                                {(order.item_price[productIdx]*order.buyQuantity[productIdx]).toFixed(2)}
                            </Grid>
                        </Grid>
                            ))
                        )
                    }
                <div ><h3 margin="20px 0px">Total price: {order.totalPrice}</h3></div>
            </Box>
            <br/>
            <h2>Card Information</h2>
            <Box margin="10px auto" >
                
                <Grid item>
                    <h3>Card Number: {order.paymentInfo.creditCardNumber}</h3>
                    <br/>
                </Grid>
            
                <br/>
            </Box>
            <Box margin="10px auto" sx={{width: 450, height: 200, border: '4px solid', borderColor: '#c41581' , borderRadius: 5}}>
                <h2>Shipment Information</h2>
                <Grid container spacing={5}>
                    <Grid item >
                        <h3>Name:</h3>
                    </Grid>
                    <Grid item>
                        <h3>{order.shippingInfo.name}</h3>
                    </Grid>
                    
                </Grid>
                <Grid container spacing={2}>
                    <Grid item >
                        <h3>Address Line 1:</h3>
                    </Grid>
                    <Grid item>
                        <h3>{order.shippingInfo.addressLine1}</h3>
                    </Grid>
                    <Grid item >
                        <h3>Address Line 2:</h3>
                    </Grid>
                    <Grid item>
                        <h3>{order.shippingInfo.addressLine2}</h3>
                    </Grid>
                    <Grid item>
                        <h3>City: {order.shippingInfo.city}, State: {order.shippingInfo.state}, Zip: {order.shippingInfo.zip}</h3>
                    </Grid>
                    
                    <br/>
                </Grid>
            </Box>
            
            <Button
            onClick={() => purchaseHandler()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Checkout Order
            </Button>
            {/* <Button className='btn' onClick={() => purchaseHandler()}>Checkout Order</Button> */}
        </div>
    );
}
 
export default Confirm;