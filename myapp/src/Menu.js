import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import {CssBaseline} from  '@material-ui/core';

//import "./Menu.css";

import "./Menu.css";
import Main from "./components/Main.js";
import Room from "./components/Room.js";

function Menu() {
 
   return (
     <div className= "Menu" >
    <h1>Hello Menu</h1>
    <Room/>
    </div>
  
  );
   
}

export default Menu;

