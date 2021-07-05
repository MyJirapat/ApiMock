import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

import { Grid } from "@material-ui/core/";


const useStyles = makeStyles((theme)=>   ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },

  paper: {
    height: "14%",
    width: "100%",
  },
  media: {
    height: 140,
  },
}));



function ImportantNews(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (  
    <Grid item xs={12} sm={10} md={5} spacing={3} >
       <Card className={classes.root} >
        <CardActionArea>
            <h3 className="name">{props.name} </h3>
        <CardContent>
        <Typography 
            gutterBottom variant="h5" 
            component="h2">
            {props.phone}
        </Typography>
        <Typography
            variant="body2" 
            color="textSecondary" 
            component="p">
            {props.cell}
        </Typography>
        </CardContent>
       </CardActionArea>
        <CardActions>
           <Button size="small" color="primary"></Button>
           <Button size="small" color="primary"></Button>
       </CardActions>
       </Card>  
  </Grid>
  );
}
export default ImportantNews;
