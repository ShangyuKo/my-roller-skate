import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

const Shipping = () => {
    const [name, setName] = useState(null);
    const [addressLine1, setAddressLine1] = useState(null);
    const [addressLine2, setAddressLine2] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const history = useHistory()


    const [total_num, setDst] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:7000/order_query").then((data)=>{
            const data_ = JSON.parse(JSON.stringify(data.data));
            var total_num = 0;
            data_.forEach(order => {
                total_num = total_num + order.quantity * order.Price
            });

            return setDst(total_num);
        });
    },[])

    const handleSubmit = (e) => {
        axios
        .post("http://localhost:7000/depost_address", {
            name: name,
            address_1: addressLine1,
            address_2: addressLine2,
            city: city,
            state: state,
            zip: zip,
        })
        // .then((res) => {
        //   alert("success");
        // //   props.history.push("/signin");
        // })
        .catch((e) => {
          console.log(e);
          alert("failed", e);
        });

        history.push('/confirm');
    }

    return (
        <div className="payment">
            <h2>Your total Price: {total_num}</h2>
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