import React, { useState, useEffect } from "react";
import { LoginInput } from "./Input";
import { Card, CardContent,  Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import { useForm } from "react-hook-form";
//import fetchOptions, { fetchPostOptions } from '../../fetchOptions';


import {
  HashRouter as Router,
  Link,
  useHistory
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function Login(props) {
  const classes = useStyles();
  //const { register, handleSubmit, control, watch, errors } = useForm();
  const [isRedirect, setIsRedirect] = useState(-1);
  const history = useHistory();

  //console.log('eeror', errors);

  const onSubmit = async (data) => {
    const loginInput = { username: data.username, password: data.password };
    
  }

 
  
  return (
    <div className="container">
    
      <div className="box" style={{ borderRadius: 15 }}>
        <div className="card" style={{ borderRadius: 15 }}>
          <Card className={classes.root} style={{ borderRadius: 15 }}>
            <CardContent>
            <h3 className="east-bay-font">HABITAT</h3>
             
                <LoginInput type="text" placeholder="Username"  name="username" />
                <LoginInput type="password" placeholder="Password"name="password" />
                <button type="submit" className="border border-dark east-bay-button text-light login-btn">
                  Login
                </button>
        
              <Link to="/registers">
                <h5 className="east-bay-font">Register</h5>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
