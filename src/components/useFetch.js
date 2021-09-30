import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        axios.get("http://localhost:7000/item_query").then((data)=>{
            // // console.log(data.data)
            // console.log(JSON.stringify(data.data))
            // console.log(JSON.parse(JSON.stringify(data.data)))
            const data_ = JSON.stringify(data.data);
            setData(data_);
            setError(null);
            setIsPending(false);
            // return data_
        });
    },[])

    return {data, error, isPending};
}

export default useFetch;