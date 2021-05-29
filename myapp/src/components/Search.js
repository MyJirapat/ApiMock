import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CardActions from "@material-ui/core/CardActions";
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';



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
    marginLeft: theme.spacing(0.2),
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

const Search= props=>{
  const classes = useStyles();

  //const handleOnSearch = (string, result) =>{
   // console.log(string, results)
  //}

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
  </Paper>

  );
}

export default Search;










































/*return (
  <div>
    <Paper component= "form"className={classes.margin}>
      <IconButton"> 
        type="submit" aria-label="search" 
      </IconButton >

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
    </FormControl>
  </div>
);
}*/


