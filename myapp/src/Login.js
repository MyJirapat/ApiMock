import React, { Component } from "react";


import logo from './logo.svg';
import './Login.css';

import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from  '@material-ui/core';

import Header from "./components/Header";
import TextField from "./components/TextField";
import Button from "./components/Button";



import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";


function Login(){
    return (
        <div className=":Login">
          <header className="Log-header">
          <form className= "form">
          <Header/>
          <TextField/>

          
          </form>
          </header>
        </div>
      );
    }


export default Login;


