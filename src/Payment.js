import { useState } from "react";
import { useHistory } from "react-router";

const Payment = ({order, setOrder}) => {
    const [creditCardNumber, setCreditCardNumber] = useState(order.paymentInfo.creditCardNumber);
    const [expireDate, setExpireDate] = useState(order.paymentInfo.expireDate);
    const [ccvCode, setCcvCode] = useState(order.paymentInfo.ccvCode);
    const [cardHolderName, setCardHolderName] = useState(order.paymentInfo.cardHolderName);
    const history = useHistory()

    const handleSubmit = (e) => {
        order.paymentInfo.creditCardNumber = creditCardNumber;
        order.paymentInfo.expireDate = expireDate;
        order.paymentInfo.ccvCode = ccvCode;
        order.paymentInfo.cardHolderName = cardHolderName;
        setOrder({...order});
        history.push('/shipping');
    }

    return (
        <div className="payment">
            <h2>Your total Price: {order.totalPrice}</h2>
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