import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from "./Card";
import Box from '@material-ui/core/Box';
import Sheet from "./Sheet";
import Typography from '@material-ui/core/Typography';

import News from "./News";
import '../css/Modal.css';

export const Modal = ({ show, close }) => {
  return (
    <div className="modal-wrapper" style={{
      transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }} >
      <div className="modal-header">
            <p>New Annoucement</p>
      <span  onClick={close} 
             className="close-modal-btn">x
      </span>
      </div>
      <div className="modal-content">
          <p>Description</p>
        <div className="modal-body">
            <p>placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
             <Button variant="contained" 
                     color="primary" 
                     onClick={close} 
                     className="btn-cancel">Annouce
            </Button>
        </div>
      </div>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '-10%',
    marginTop: "10%",
    display: "block",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    
  },

  root2: {
    padding: '350px 350px',
    display: "inline-block",
    alignItems: 'center',
    width: 500,
    borderRadius: '8px',
    marginRight: '70%',
    marginTop: '1%',
    marginBottom: '10%'  
  },

  root3:{
    padding: '350px 250px',
    display: "inline-block",
    alignItems: 'center',
    width: 300,
    borderRadius: '8px',
    marginRight: '30%',
    marginTop: '1%',
    marginBottom: '10%'  

  },

  Btn:{
    marginLeft: 1000,
    marginTop: -50

  }
}));

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const classes = useStyles();


  return (

 
  <div className="papersheet">
    <div className= "Modal">
      { show ? <div onClick={closeModalHandler}  ></div> : null }
         <Button  className={classes.Btn}
                  variant="contained" 
                  color="primary"           
                  onClick={() => setShow(true)}>
                  Compose
          </Button>

          <Modal  show={show} 
          close={closeModalHandler}
          />
    </div>
        
 </div>
  );
}

export default App;


/*<Paper component="form" className={classes.root2}> 
        </Paper>*/































/*import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal*/