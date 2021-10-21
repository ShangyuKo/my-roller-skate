//import * as React from 'react';
//import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Button from '../Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlined from "@bit/mui-org.material-ui-icons.lock-outlined"
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    if (email !== null && password !== null ) {//&& confirmPassword !== "" && password === confirmPassword
      axios.post("http://localhost:7000/signin", {
        email: email,
        password: password,
      })
     
      .then((res) => {
        //console.log('success!');
        alert('Logged In successfully!');
        history.push('/my-roller-skate');
      })
      .catch((e) => {
        alert("Password is incorrect OR This email has not been registered");
        console.log(e);
      });
      setPassword("");
    };
  }
   
  

  function refreshPage(link){ 
    window.location.href = link
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box action="/signin"  component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
              // margin="normal"
              // required
              fullWidth
              // id="email"
              // label="Email Address"
              // name="email"
              // autoComplete="email"
              // autoFocus
              // onChange={(e) => setEmail(e.target.value)}
              label="email"
              variant="filled"
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item >
                <Link href='/signup' className='nav-links' onClick={() => {refreshPage('/signup')}}>
                {/* href="#" variant="body2"  onClick={() => {refreshPage('/signup')}}*/}
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

