import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import './Payment.css';


const Payment = ({user_uid}) => {
    const [creditCardNumber, setCreditCardNumber] = useState(null);
    const [expireDate, setExpireDate] = useState(null);
    const [ccvCode, setCcvCode] = useState(null);
    const [cardHolderName, setCardHolderName] = useState(null);
    const history = useHistory()

    const [total_num, setDst] = useState(null);
    useEffect(()=>{
        axios.post("http://localhost:7000/order_query", {
            user_uid: user_uid
        }).then((data)=>{
            const data_ = JSON.parse(JSON.stringify(data.data));
            var total_num = 0;
            data_.forEach(order => {
                total_num = total_num + order.quantity * order.Price
            });

            return setDst(total_num);
        });
    },[])

    console.log('user_uid: ', user_uid);

    const handleSubmit = (e) => {
        axios
        .post("http://localhost:7000/depost_card", {
            card_number: creditCardNumber,
            expiration_date: expireDate,
            cvvCode: ccvCode,
            holder_name: cardHolderName,
            user_uid: user_uid
        })
        // .then((res) => {
        //   alert("success");
        // //   props.history.push("/signin");
        // })
        .catch((e) => {
          console.log(e);
          alert("failed", e);
        });

        history.push('/shipping');
    }


    return (
        <div className="payment">
            <h2>Your total Price: {total_num}</h2>
            <form onSubmit={handleSubmit}>
                <label>Credit Card Number</label>
                <input
                    type="text"
                    required
                    value={creditCardNumber}
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                />
                <label>Expire Date</label>
                <input
                    type="text"
                    required
                    value={expireDate}
                    onChange={(e) => setExpireDate(e.target.value)}
                />
                <label>ccvCode</label>
                <input
                    type="text"
                    required
                    value={ccvCode}
                    onChange={(e) => setCcvCode(e.target.value)}
                />
                <label>Card Holder Name</label>
                <input
                    type="text"
                    required
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                />
                <button onClick={() => {history.goBack()}}>Back</button>
                &nbsp;&nbsp;&nbsp;
                <button>Pay</button>
            </form>
        </div>
    );
}
 
export default Payment;