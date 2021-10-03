import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

const Payment = () => {
    const [lookForId, setLookforId] = useState(null);
    const [content, setContent] = useState(null);
    const [contentLength, setContentLength] = useState(0);
    const [hasSubmitId, setHasSubmitId] = useState(false);
    const [submitId, setSubmitId] = useState(null);

    // useEffect(()=>{
    // },[])

    // const handleFindContent = (e) => {
    //     axios.get("http://localhost:7000/contactUsMessage_query").then((data)=>{
    //         const data_ = JSON.parse(JSON.stringify(data.data));
    //         console.log(data_);
    //         var content = data_[0].content;
    //         setContent(content);
    //     });
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/depost_contactUsMessage", {
            content: content,
        })
        .then((response) => {
            const data_ = JSON.parse(JSON.stringify(response.data));
            setSubmitId(data_[0]['LAST_INSERT_ID()']);
            setHasSubmitId(true)
        }, (error) => {
            console.log(error);
        });
        setContent("");
    }

    return (
        <div className="CreateContactUsMessage">
            <form onSubmit={handleSubmit}>
                <label>Your Message</label>
                <br/>
                <textarea
                    required
                    rows="10"
                    cols="50"
                    maxLength="255"
                    value={content}
                    onChange={(e) => {setContent(e.target.value);setContentLength(e.target.value.length);}}
                ></textarea>
                <br/>
                <button>Submit</button>
                { <div>{contentLength}/255</div> }
            </form>
            <br/>
            {hasSubmitId && <div>Thank you for your message. Your message number is {submitId}.</div>}
        </div>
    );
}
 
export default Payment;