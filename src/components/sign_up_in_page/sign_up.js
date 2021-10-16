
// import Button from '@material-ui/core/Button';
// import {Button} from '../Button';
// import ModalDialog from './ModalDialog';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button1 from '@material-ui/core/Button';
import {Button} from '../Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  // create state variables for each input
  // const [Id, setdId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [hasSubmitId, setHasSubmitId] = useState(false);
  // const [submitId, setSubmitId] = useState(null);
  // const [Id, setId] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (firstName !== null && password !== null ) {//&& confirmPassword !== "" && password === confirmPassword
      axios.post("http://localhost:7000/signup", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((res) => {
          // console.log("got here");
          alert("registered successfully!");
         // props.history.push("/signup");
        })
        
        .catch((e) => {
          if (e.response.status === 500) {
            alert("account already exists！");
          }
        });
      //   .then((response) => {
      //     // const data_ = JSON.parse(JSON.stringify(response.data));
      //     // setSubmitId(data_[0]['LAST_INSERT_ID()']);
      //     // setHasSubmitId(true)
      //   }, (error) => {
      //     console.log(error);
      //   });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      };
      
        
    // } else if (password === "") {
    //   alert("請輸入帳號!");
    // } else if (password === "") {
    //   alert("請輸入密碼!");
    // } else if (password !== confirmPassword) {
    //   alert("兩次密碼輸入不一致!");
    // }
    }
  return (
    <form className={classes.root} onSubmit={submit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button1 variant="contained" >
          {/* onClick={handleClose} */}
          Cancel
        </Button1>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
}
export default Signup;
