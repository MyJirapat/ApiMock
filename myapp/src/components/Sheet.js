import React,{useState, useEffect} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Box from "@material-ui/core/Box";
import News from "./News";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Image1 from "../Image/ABAC.jpg";
import Image2 from "../Image/ABAC2.jpg";
import axios from 'axios';
import Searchbar from '../Dropdown/SearchBar'
//import Search from "@material-ui/icons/Search";

// watch the video
// https://react.school/material-ui/paper

const useStyles = makeStyles((theme) => ({
  root: {

    "& > *": {
      marginLeft: theme.spacing(10),
      width: theme.spacing(50),
      height: theme.spacing(100),  
      width: 680
    },

    padding: "150px,150px"

  },

  root2:{
    maxWidth: 350,
    margin: theme.spacing(4),
    width: theme.spacing(30),
  },

  root3:{
    margin: theme.spacing(4),
    width: 245,
  }

}));


/*function createCard(props) {
  const{posts} = props;
  return (
    <News
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );*/

 function Variants() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [search, setSearch] =useState([]);

useEffect(() =>{

   async function fetchPost(){
    try{
      const requesUrl = 'https://restcountries.eu/rest/v2/all';
      const response = await fetch(requesUrl);
      const responseJSON =await response.json();
      console.log(responseJSON);
      setPosts(responseJSON);    
    } catch{    
    }
   }
   fetchPost();
}, []);



const filterCards = event =>{
  const value = event.target.value.toLowerCase();
  const filtered = search.filter(post=>(`${post.name}`.toLowerCase().includes(value)));
  setSearch(filtered);
}

  /*useEffect(() =>{
    axios.get('https://60aa459d66f1d000177729b4.mockapi.io/api/v1/announcement')
    .then(res =>{
      console.log(res)
      setPosts(res.data)
    })
    
    .catch(err =>{
     console.log(err)
    })

  })*/

  

  return (
    <div className={classes.root}>  
      <Paper elevation={4}>
      <Typography>
        <h1> Anoucement</h1>
        </Typography>
        <Box p={1}>
        
        <div className="container">
        <Searchbar onChange={filterCards} placeholder="Search"/>
                <div className="row">     
                    <div className="col-md-6">  
                    {posts.map((post) => (
                       <News
                       //Title={index.id}
                       Title={post.name}
                       /> ))};                              
                     </div>
        </div>
        </div>
        </Box>
      </Paper> 
    </div>
  );
} 

export default Variants;


/*<div className="App"> 
      <h1>Social Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">  
            {users.map((user, index) => (
        <News
        key={index} 
        userData={user}/>
        ))}
      </div>
      </div>*/




















/*{emojipedia.map(emojiTerm => (
  <Entry
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description={emojiTerm.meaning}
  />
))}*/


/*<Card className={classes.root2}>
            <CardContent>
              <Typography 
              variant="h6">Card</Typography>
              <Typography variant="body2"> CardActions</Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Primary
            </Button>
              <Button size="small" color="secondary">
                Secondary
          </Button>
            </CardActions>
          </Card>  */        








          /*
          <div className="col-md-6">
                         <News 
                              img=""
                              name="Important News"
                              NewsTitle="Hello"
                              Text="kkkkkkkkkkkkkk"
                              Share="Share"
          
                           />
                     </div>

                     <div className="col-md-6">
                         <News 
                              img=""
                              name="Important News"
                              NewsTitle="Hello"
                              Text="kkkkkkkkkkkkkk"
                              Share="Share"
          
                           />
                     </div>

                     <div className="col-md-6">
                         <News 
                              img=""
                              name="Important News"
                              NewsTitle="Hello"
                              Text="kkkkkkkkkkkkkk"
                              Share="Share"
          
                           />
                     </div>

                     <div className="col-md-6">
                         <News 
                              img=""
                              name="Important News"
                              NewsTitle="Hello"
                              Text="kkkkkkkkkkkkkk"
                              Share="Share"
          
                           />
                     </div>

                     <div className="col-md-6">
                         <News 
                              img=""
                              name="Important News"
                              NewsTitle="Hello"
                              Text="kkkkkkkkkkkkkk"
                              Share="Share"
          
                           />
                     </div>

                     <div className="col-md-6">
                         <News 
                              img=""
                              name="Important News"
                              NewsTitle="Hello"
                              Text="kkkkkkkkkkkkkk"
                              Share="Share"
          
                           />
                     </div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          */