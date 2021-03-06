import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from  '@material-ui/core';

import Header from "./components/Header";
import TextField from "./components/TextField";
import Menu from "./Menu";
import Login from "./Login";
import About from "./About";
import Annoucement from "./Anoucement";
import Test from "./Test";
import Electric from "./Expens/Electricity";
import Electricitybill from "./Billhistory/Electricitybill";
import Chart from "./Boardtable/Chart";
import FeaturedInfo from './Boardtable/featuredInfo';
import Sidebar from './Boardtable/Sidebar';
import Buiding from "./Building/Sidebarpage";
import TestNews from "./ImportantNews/TestNews"
//import Dashboard from './Dashbordtable/Dashboard';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
          
      <Route exact path= "/" component={Login}/>
      <Route exact path= "/menu" component={Menu}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/anoucement" component={Annoucement}/>
      <Route exact path="/test" component={Test}/>
      <Route exact path="/electric" component={Electric}/>
      <Route exact path="/chart" component={Chart}/>
      <Route exact path="/feature" component={FeaturedInfo}/>
      <Route exact path="/dashboard" component={Sidebar}/>
      <Route exact path="/building" component={Buiding}/>
      <Route exact path="/news" component={ TestNews}/>

      <Route exact path="/electricitybill" component={Electricitybill}/>

      






    </div>
  );
}

export default App;












//<Button type="button" color="facebook" className="form__custom-button">  Log in</Button>


//<img src={logo} className="App-logo" alt="logo" />

/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React*/



//<Route exact path= "/app" component={App}/>
   //         <Route exact path= "/menu" component={Menu}/>