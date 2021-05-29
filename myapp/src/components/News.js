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

const useStyles = makeStyles((theme)=>   ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),


  },
  media: {
    height: 140,
  },
}));



export default function MediaCard(props) {
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
}


//<img src={props.imgsrc} className={classes.media}/>


//<image className={classes.media}>{props.img}</image>





















