import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import {CssBaseline} from  '@material-ui/core';

//import "./Menu.css";

import "./Menu.css";

import Room from "./components/Room.js";
import Anouce from "./components/Anouce";

function Anoucement() {
 
   return (
     <div className= "Anoucement" >
    <h1>Hello Menu</h1>
    <Anouce/>
    </div>
  
  );
   
}

export default Anoucement;

