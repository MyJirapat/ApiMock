/*import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from "@material-ui/core/";

const styles =  makeStyles((theme)=>   ({
  root2: {
    margin: 0,
    //padding: theme.spacing(2),
  },

  root3:{
    maxWidth: 345,
    //marginLeft: "50%",
    margin: theme.spacing(2),
   
  },

  media2: {
    height: 220,
    marginLeft:"2%"
  },

  media: {
    height: 140,
  },

  root: {
    maxWidth: 345,
  },  
}));


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
    const classes = styles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>    
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         News
        </DialogTitle>
        <DialogContent dividers>
        <Grid item xs={10} sm={5} md={6} spacing={5} >    
       <Card className={classes.root3} >
        <CardActionArea>
        <img src={props.img} className={classes.media2}/>  
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
           <Button size="small" color="primary">Share</Button>
           <Button size="small" color="primary">{props.btn2}</Button>
       </CardActions>
       </Card>  
  </Grid>

        </DialogContent>
       
      
    </div>
  );
}*/

import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core/";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = makeStyles((theme)=>  ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  paper: {
    height: "14%",
    width: "100%",
  },
  media: {
    height: 220,
    marginLeft:"2%"
  },

  cardstyle:{
    maxWidth: 345,
    //marginLeft: "50%",
    margin: theme.spacing(2),
  },
  paper: {
    height: "14%",
    width: "100%",
  },


}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs() {
  const classes = styles();
  const [spacing, setSpacing] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Grid item xs={12} sm={11} md={6} spacing={5} >    
        <DialogTitle id="customized-dialog-title" >
          Modal title
        </DialogTitle>
        <DialogContent dividers>
        <Card className={classes.cardstyle} >
        <CardActionArea>
        <img src className={classes.media}/>  
            <h3 className="name">name </h3>
        <CardContent>
        <Typography 
            gutterBottom variant="h5" 
            component="h2">
            test
        </Typography>
        <Typography
            variant="body2" 
            color="textSecondary" 
            component="p">
           cel
        </Typography>
        </CardContent>
       </CardActionArea>
        <CardActions>
           <Button size="small" color="primary">Share</Button>
           <Button size="small" color="primary">Button</Button>
       </CardActions>
       </Card>  

        </DialogContent>
        </Grid>
        
   
    </div>
  );
}
