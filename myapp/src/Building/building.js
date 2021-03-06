import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import "../css/Building.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '8%',
    marginTop: "-3%",
    display: "block",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

    left:{
      marginright: '300%'
    }    
  },
}));

export default function BuildingDialog() {
  const classes =useStyles(); 
  /*const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [totalinput, setTotalinput] = useState("");

  const add = () => {
    setTotal({ total: totalinput });
  };*/ 
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [totalinput, setTotalinput] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const add = () => {
    setTotal({ total: totalinput });
  };

  const onChange = (event) => {
    setName({
      [event.target.name]: event.target.value
    });
  };

  /*const inputs = [];
  for (let i = 1; i <= total; i++) {
    inputs.push(<input name={`input-${i}`} onChange={this.onChange} />);
  }*/
  const inputs = [];
  for (let i = 1; i <= total; i++) {
    inputs.push(<input name={`input-${i}`} onChange={onChange} 
    className="lastName" />);
  }
  return (
    <div className={classes.root} >
      <Button variant="contained" color="primary" disableElevation
            onClick={handleClickOpen}>
        Add Building
      </Button>   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">Building</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>

          <form noValidate>
          <div className="Building">
                <label htmlFor="Buildingname">Buildingname</label>
                <input   
                  placeholder="Buildingname"
                  type="Buildingname"
                  name="text"
                  noValidate           
                />    
              </div>

              <div className="password">
                <label htmlFor="Address">Address</label>
                <input   
                  placeholder="Address"
                  type="text"
                  name="Address"
                  noValidate           
                />    
              </div>

              <div className="Province">
                <label htmlFor="Province">Province</label>
                <input   
                  placeholder="Province"
                  type="Province"
                  name="Province"
                  noValidate           
                />    
              </div>

              <div className="SubDistric">
                <label htmlFor="Sub-Distric">SubDistric</label>
                <input   
                  placeholder="Sub-Distric"
                  type="Sub-Distric"
                  name="Sub-Distric"
                  noValidate           
                />    
              </div>

              <div className="District">
                <label htmlFor="District">District</label>
                <input   
                  placeholder="District"
                  type="District"
                  name="District"
                  noValidate           
                />    
              </div>

              <div className="zipcode">
                <label htmlFor="District">Zipcode</label>
                <input   
                  placeholder="Zipcode"
                  type="text"
                  name="District"
                  noValidate           
                />    
              </div>

              <div className="firstName">
                <label htmlFor="Age">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  name="Phone Number"
                  noValidate       
                />
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  name="lastName"
                  noValidate        
                />         
              </div>

              <div className="firstName">
                <label htmlFor="Age">Number of Floor</label>
                <input
                  placeholder="Number of Floor"
                  type="text"
                  name="firstName"
                  noValidate  
                  onChange={(e) => setTotal(e.target.value)}           
                />        
                  <br />
                  {inputs}
                  <br />                 
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate      
                /> 
              </div>
            <DialogActions className="createAccount">
              <button type="submit">Create </button>
            </DialogActions>
            </form>
        </DialogContent>      
      </Dialog>
    </div>
  );
}




/*<DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>*/


      /*  <div className="lastName">
        <label htmlFor="lastName"></label>
        <Button onClick={handleClose} color="primary">Generate</Button>
      </div>  */   