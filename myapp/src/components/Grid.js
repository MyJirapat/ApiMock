import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import { Grid } from "@material-ui/core/";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    media: {
      height: 200
    },
    content: {
      height: 150
    },
    nav: {
      textDecoration: "None"
    }
  }));


function AnouceNews(props){
    const classes = useStyles();
    return(
    <div className={classes.root}>
      <Paper elevation={4}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        
            <Grid item xs={10} sm={6}>
                <Card>
                  <CardActionArea>
                    <CardMedia className={classes.media} />
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.title}
                      >
                       {props.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                      {props.body}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                     {props.text}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                      
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
       
            </Grid>
      </Grid>
      </Paper>
      
    </div>
    );
};

export default AnouceNews;

















/*export default function MediaCard(props) {
  const classes = useStyles();
  return (  
  <Card className={classes.root}>
    <CardActionArea>
          <img src={props.imgsrc} className={classes.media}/>
          <h3 className="name">{props.Title} </h3>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {props.NewsTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.Text}
        </Typography>
        </CardContent>
    </CardActionArea>

    <CardActions>
      <Button size="small" color="primary">
         {props.Share}
      </Button>
      <Button size="small" color="primary">
         {props.LearnMorre}
      </Button>
    </CardActions>
  </Card>  
  );
}*/