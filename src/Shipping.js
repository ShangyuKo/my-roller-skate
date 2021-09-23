import { useState } from "react";
import { useHistory } from "react-router";

const Shipping = ({order, setOrder}) => {
    const [name, setName] = useState(order.shippingInfo.name);
    const [addressLine1, setAddressLine1] = useState(order.shippingInfo.addressLine1);
    const [addressLine2, setAddressLine2] = useState(order.shippingInfo.addressLine2);
    const [city, setCity] = useState(order.shippingInfo.city);
    const [state, setState] = useState(order.shippingInfo.state);
    const [zip, setZip] = useState(order.shippingInfo.zip);
    const history = useHistory()

    const handleSubmit = (e) => {
        order.shippingInfo.name = name;
        order.shippingInfo.addressLine1 = addressLine1;
        order.shippingInfo.addressLine2 = addressLine2;
        order.shippingInfo.city = city;
        order.shippingInfo.state = state;
        order.shippingInfo.zip = zip;
        setOrder({...order});
        history.push('/confirm');
    }

    return (
        <div className="payment">
            <h2>Your total Price: {order.totalPrice}</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Address Line 1</label>
                <input
                    type="text"
                    required
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                />
                <label>Address Line 2</label>
                <input
                    type="text"
                    required
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                />
                <label>City</label>
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label>State</label>
                <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label>Zip</label>
                <input
                    type="text"
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />
                <button onClick={() => {history.goBack()}}>Back</button>
                &nbsp;&nbsp;&nbsp;
                <button>Check</button>
            </form>
        </div>
    );
}
 
export default Shipping;