import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1px 1px',
    display: "inline-block",
    alignItems: 'center',
    width: 245,
    borderRadius: '8px',
    marginLeft: '1%',
    marginTop: '-150%',
    marginBottom: '10%' 
  },
  input: {
    marginLeft: theme.spacing(0),
    backgroud: "#fff",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
                               
  const ComboBox = props=>{
    const classes = useStyles();
  return (

    <Paper component="form" className={classes.root}>  
      <Autocomplete
           size="small"
          className={classes.input}
           placeholder= {props.name}
           id="combo-box-demo"
           options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => 

             <TextField 
             className={classes.textFeild} 
             {...params} 
            label={props.floor} 
            variant= "outlined"  />}
  /> 
    
    </Paper>


  );
  }



export default ComboBox;

/*id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}*/




// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  
 
];
















































/*const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
    alignItems: 'center',
    width: 250,
    borderRadius: '8px',
    },
  },
  input: {
   
    padding: '10px 150px',
    flex: 1,
    
    // Use the system font instead of the default Roboto font.   
  },
}))(InputBase);



const useStyles = makeStyles((theme) => ({
  margin: {
    padding: '10px 10px',
    display: "inline-block",
    alignItems: 'center',
    width: 250,
    borderRadius: '8px',
    marginLeft: '1%',
    marginTop: '-150%',
    marginBottom: '10%'  
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <div>
      <Paper className={classes.margin}>
        
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
         
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </Paper>
    </div>
  );
}*/


/*const Search= props=>{

    const classes = useStyles();
  
    return (
      <Paper component="form" className={classes.root}>
          <IconButton 
          type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
          </IconButton>
    
        <InputBase
          className={classes.input}
          placeholder= {props.name}
          inputProps={{ 'aria-label': 'search google maps' }}
        /> 
      </Paper>*/