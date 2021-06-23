import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from '../Dropdown/SearchBar'
import TextField from '@material-ui/core/TextField';
import News from "../components/News";
import AnouceNews from '../components/Grid';
import ImpNews from '../Anouncement/ImpNews';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import "./app.css";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    marginTop: -50,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

  },
}));

function Social() {
  const classes = useStyles();
  const [allData, setAllData] = useState([]);
//import allData 
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
          console.log(value);
          result = allData.filter((data) => {
          return data.tite.search(value) != -1;
    });
    setFilteredData(result);
    }

/*const styles = {
    display:'inline',
    width:'30%',
    height:50,
    float:'left',
    padding:5,
    border:'0.5px solid black',
    marginBottom:10,
    marginRight:10
    }*/

useEffect(() => {
    axios('https://60aa459d66f1d000177729b4.mockapi.io/api/v1/announcement')
    .then(response => {
         console.log(response.data)
    setAllData(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);
    
    /*return(
        <div className="App">
            <div style={{ margin: '0 auto', marginTop: '10%' }}>
                <label>Search:</label>
                <input type="text" onChange={(event) =>handleSearch(event)}/>
        </div>
            <div style={{padding:10}}>
            {filteredData.map((value,index)=>{            
        return(    
            <div
             key={value.id}>
               <div style={styles}>
                    {value.tite}                 
              </div>
           </div>
     )
     })}
     </div>
</div>
    );
}

export default Social;*/

return (  
    <div >
    <Paper component="form" className={classes.root}>
        <TextField 
            size="small"
            variant="outlined" 
            label="Search" 
            onChange={(event) =>handleSearch(event)} 
            placeholder="Search..."
          />
    </Paper>

    <div className="Apps"> 
      <div className="cards-container">  
          {filteredData.map((value,index)=>(
        <ImpNews
          key={index} 
          name={value.tite}
          ID ={value.id}/>
        ))}
      </div>
    </div>
</div>

      

);
}

export default Social;


















/*return (
    <div >
      <h1>Social Cards</h1>
      <input className="search-box"  onChange={(event) =>handleSearch(event)} placeholder="Search..."/>
      <div className="cards-container">

      {filteredData.map((value,index) => (
        <AnouceNews  key={value.id} Title={value.tite}/>
        ))}
      </div>
    </div>
  );
}
export default Social;*/





/*<News 
key={value.id}
Title={value.title}
/>*/