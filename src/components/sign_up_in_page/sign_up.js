
// import Button from '@material-ui/core/Button';
// import {Button} from '../Button';
// import ModalDialog from './ModalDialog';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button1 from '@material-ui/core/Button';
import {Button} from '../Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
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
          //console.log('success!');
          alert('Registered successfully!');
          history.push('/signin');
        })
        .catch((e) => {
          alert("This email is already used");
          console.log(e);
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      };

    }
    function refreshPage(link){ 
      window.location.href = link
    }

  return (
    <form className={classes.root} onSubmit={submit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        fullWidth
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        fullWidth
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
        {/* <Grid container>
          <Grid item>
            <Link href='/signin' className='nav-links'>
              {"Already had an account?"}
            </Link>
          </Grid>
        </Grid> */}
        <Grid container>
            <Grid item style={{background:'#1976D2'}}>
              <Link  href='/signin' className='nav-links' onClick={() => {refreshPage('/signin')}}>
              {/* href="#" variant="body2"  onClick={() => {refreshPage('/signup')}}*/}
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
        </Grid>
        
       
      </div>
    </form>
  );
}
export default Signup;
